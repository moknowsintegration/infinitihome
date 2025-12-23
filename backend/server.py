from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from services.email_service import (
    email_service,
    get_care_plan_confirmation_email,
    get_waitlist_confirmation_email,
    get_office_notification_email
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

python# CORS Middleware - MUST be added right after app creation
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ============ PRICING CONSTANTS ============
PRICING_RATES = {
    "companion": 35,
    "personal_care": {
        "level1": 38,
        "level2": 42,
        "level3": 48
    },
    "skilled_nursing": {
        "level1": 56.5,
        "level2": 72.5,
        "level3": 82.5
    }
}


# ============ PYDANTIC MODELS ============

# Care Plan Models
class ContactInfo(BaseModel):
    name: str
    email: EmailStr
    phone: str
    zip_code: Optional[str] = None

class CarePlanCreate(BaseModel):
    service_type: str  # "companion", "personal_care", "skilled_nursing"
    level: Optional[str] = "level1"  # "level1", "level2", "level3"
    hours_per_day: int
    days_per_week: int
    mobility_level: Optional[str] = None
    medical_complexity: Optional[str] = None
    contact_info: ContactInfo

class CarePlan(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    service_type: str
    level: str
    hourly_rate: float
    hours_per_day: int
    days_per_week: int
    weekly_cost: float
    monthly_cost: float
    mobility_level: Optional[str] = None
    medical_complexity: Optional[str] = None
    contact_info: ContactInfo
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"


# Waitlist Models
class WaitlistCreate(BaseModel):
    waitlist_type: str  # "medicare" or "va-benefits"
    name: str
    email: EmailStr
    phone: str
    zip_code: Optional[str] = None
    needs_care_in: str  # "within-1-month", "1-3-months", "3-6-months", "6-plus-months"
    services_needed: List[str]  # ["companion-care", "personal-care", "skilled-nursing"]
    additional_notes: Optional[str] = None

class Waitlist(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    waitlist_type: str
    name: str
    email: str
    phone: str
    zip_code: Optional[str] = None
    needs_care_in: str
    services_needed: List[str]
    additional_notes: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    notified: bool = False
    status: str = "pending"


# Contact Form Models
class ContactFormCreate(BaseModel):
    form_type: str  # "general", "book-consultation", "verify-coverage"
    name: str
    email: EmailStr
    phone: str
    zip_code: Optional[str] = None
    preferred_contact: Optional[str] = None
    care_recipient: Optional[str] = None
    description: Optional[str] = None

class ContactForm(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    form_type: str
    name: str
    email: str
    phone: str
    zip_code: Optional[str] = None
    preferred_contact: Optional[str] = None
    care_recipient: Optional[str] = None
    description: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"


# Payment Verification Models
class PaymentVerificationCreate(BaseModel):
    verification_type: str  # "medicaid", "peachstate", "ltc-insurance"
    name: str
    email: EmailStr
    phone: str
    insurance_carrier: Optional[str] = None
    policy_number: Optional[str] = None
    medicaid_id: Optional[str] = None
    peachstate_id: Optional[str] = None

class PaymentVerification(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    verification_type: str
    name: str
    email: str
    phone: str
    insurance_carrier: Optional[str] = None
    policy_number: Optional[str] = None
    medicaid_id: Optional[str] = None
    peachstate_id: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    verified: bool = False
    status: str = "pending"


# ============ HELPER FUNCTIONS ============

def calculate_care_cost(service_type: str, level: str, hours_per_day: int, days_per_week: int):
    """Calculate care costs based on service type, level, and schedule"""
    hourly_rate = 0
    
    if service_type == "companion":
        hourly_rate = PRICING_RATES["companion"]
    elif service_type == "personal_care":
        hourly_rate = PRICING_RATES["personal_care"].get(level, PRICING_RATES["personal_care"]["level1"])
    elif service_type == "skilled_nursing":
        hourly_rate = PRICING_RATES["skilled_nursing"].get(level, PRICING_RATES["skilled_nursing"]["level1"])
    
    weekly_hours = hours_per_day * days_per_week
    weekly_cost = hourly_rate * weekly_hours
    monthly_cost = weekly_cost * 4.33  # Average weeks per month
    
    return {
        "hourly_rate": hourly_rate,
        "weekly_cost": round(weekly_cost, 2),
        "monthly_cost": round(monthly_cost, 2)
    }


# ============ API ROUTES ============

@api_router.get("/")
async def root():
    return {"message": "INFINITI Home Care Enterprise API"}


@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "INFINITI Home Care API"}


# Care Plan Endpoints
@api_router.post("/care-plans", response_model=CarePlan)
async def create_care_plan(input: CarePlanCreate):
    """Create and save a care plan with cost calculations"""
    # Calculate costs
    costs = calculate_care_cost(
        input.service_type,
        input.level or "level1",
        input.hours_per_day,
        input.days_per_week
    )
    
    # Create care plan object
    care_plan = CarePlan(
        service_type=input.service_type,
        level=input.level or "level1",
        hourly_rate=costs["hourly_rate"],
        hours_per_day=input.hours_per_day,
        days_per_week=input.days_per_week,
        weekly_cost=costs["weekly_cost"],
        monthly_cost=costs["monthly_cost"],
        mobility_level=input.mobility_level,
        medical_complexity=input.medical_complexity,
        contact_info=input.contact_info
    )
    
    # Save to database
    doc = care_plan.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.care_plans.insert_one(doc)
    
    # Send email confirmations
    try:
        # User confirmation email
        email_content = get_care_plan_confirmation_email(
            name=care_plan.contact_info.name,
            service_type=care_plan.service_type.replace('_', ' ').title(),
            weekly_cost=care_plan.weekly_cost,
            monthly_cost=care_plan.monthly_cost
        )
        await email_service.send_email(
            to_email=care_plan.contact_info.email,
            subject=email_content['subject'],
            html_content=email_content['html'],
            text_content=email_content['text']
        )
        
        # Office notification email
        office_content = get_office_notification_email(
            data=doc,
            submission_type="Care Plan"
        )
        await email_service.send_email(
            to_email=os.environ.get('OFFICE_EMAIL', 'office@infinitihomecare.com'),
            subject=office_content['subject'],
            html_content=office_content['html'],
            text_content=office_content['text']
        )
    except Exception as e:
        logger.error(f"Error sending emails: {str(e)}")
        # Don't fail the request if email fails
    
    return care_plan


@api_router.get("/care-plans", response_model=List[CarePlan])
async def get_care_plans():
    """Get all care plans"""
    care_plans = await db.care_plans.find({}, {"_id": 0}).to_list(1000)
    
    for plan in care_plans:
        if isinstance(plan['created_at'], str):
            plan['created_at'] = datetime.fromisoformat(plan['created_at'])
    
    return care_plans


# Waitlist Endpoints
@api_router.post("/waitlist", response_model=Waitlist)
async def create_waitlist_entry(input: WaitlistCreate):
    """Add someone to the Medicare or VA waitlist"""
    waitlist_entry = Waitlist(**input.model_dump())
    
    doc = waitlist_entry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.waitlist.insert_one(doc)
    
    # Send email confirmations
    try:
        # User confirmation email
        email_content = get_waitlist_confirmation_email(
            name=waitlist_entry.name,
            waitlist_type=waitlist_entry.waitlist_type
        )
        await email_service.send_email(
            to_email=waitlist_entry.email,
            subject=email_content['subject'],
            html_content=email_content['html'],
            text_content=email_content['text']
        )
        
        # Office notification email
        office_content = get_office_notification_email(
            data=doc,
            submission_type=f"{waitlist_entry.waitlist_type.upper()} Waitlist"
        )
        await email_service.send_email(
            to_email=os.environ.get('OFFICE_EMAIL', 'office@infinitihomecare.com'),
            subject=office_content['subject'],
            html_content=office_content['html'],
            text_content=office_content['text']
        )
    except Exception as e:
        logger.error(f"Error sending emails: {str(e)}")
        # Don't fail the request if email fails
    
    return waitlist_entry


@api_router.get("/waitlist", response_model=List[Waitlist])
async def get_waitlist():
    """Get all waitlist entries"""
    waitlist = await db.waitlist.find({}, {"_id": 0}).to_list(1000)
    
    for entry in waitlist:
        if isinstance(entry['created_at'], str):
            entry['created_at'] = datetime.fromisoformat(entry['created_at'])
    
    return waitlist


# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactForm)
async def create_contact_form(input: ContactFormCreate):
    """Submit a contact form"""
    contact_form = ContactForm(**input.model_dump())
    
    doc = contact_form.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contact_forms.insert_one(doc)
    return contact_form


@api_router.get("/contact", response_model=List[ContactForm])
async def get_contact_forms():
    """Get all contact forms"""
    forms = await db.contact_forms.find({}, {"_id": 0}).to_list(1000)
    
    for form in forms:
        if isinstance(form['created_at'], str):
            form['created_at'] = datetime.fromisoformat(form['created_at'])
    
    return forms


# Payment Verification Endpoints
@api_router.post("/verify-benefits", response_model=PaymentVerification)
async def create_payment_verification(input: PaymentVerificationCreate):
    """Submit a payment/benefits verification request"""
    verification = PaymentVerification(**input.model_dump())
    
    doc = verification.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.payment_verifications.insert_one(doc)
    return verification


@api_router.get("/verify-benefits", response_model=List[PaymentVerification])
async def get_payment_verifications():
    """Get all payment verification requests"""
    verifications = await db.payment_verifications.find({}, {"_id": 0}).to_list(1000)
    
    for verification in verifications:
        if isinstance(verification['created_at'], str):
            verification['created_at'] = datetime.fromisoformat(verification['created_at'])
    
    return verifications


# Include the router in the main app
app.include_router(api_router)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
