import os
from typing import Optional
import logging

logger = logging.getLogger(__name__)

# Email service configuration
# TO ACTIVATE: Add SENDGRID_API_KEY or MAILGUN_API_KEY to .env file
EMAIL_SERVICE = os.environ.get('EMAIL_SERVICE', 'sendgrid')  # 'sendgrid' or 'mailgun'
SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY', None)
MAILGUN_API_KEY = os.environ.get('MAILGUN_API_KEY', None)
MAILGUN_DOMAIN = os.environ.get('MAILGUN_DOMAIN', None)
FROM_EMAIL = os.environ.get('FROM_EMAIL', 'care@infinitihomecare.com')
OFFICE_EMAIL = os.environ.get('OFFICE_EMAIL', 'office@infinitihomecare.com')


class EmailService:
    """Email service for sending notifications and confirmations"""
    
    def __init__(self):
        self.is_configured = self._check_configuration()
        if not self.is_configured:
            logger.warning("Email service not configured. Add API keys to .env to enable.")
    
    def _check_configuration(self) -> bool:
        """Check if email service is properly configured"""
        if EMAIL_SERVICE == 'sendgrid':
            return SENDGRID_API_KEY is not None
        elif EMAIL_SERVICE == 'mailgun':
            return MAILGUN_API_KEY is not None and MAILGUN_DOMAIN is not None
        return False
    
    async def send_email(
        self,
        to_email: str,
        subject: str,
        html_content: str,
        text_content: Optional[str] = None
    ) -> bool:
        """Send email using configured service"""
        
        if not self.is_configured:
            logger.info(f"Email would be sent to {to_email}: {subject}")
            logger.info("Add API keys to .env to enable actual email sending")
            return False
        
        try:
            if EMAIL_SERVICE == 'sendgrid':
                return await self._send_via_sendgrid(to_email, subject, html_content, text_content)
            elif EMAIL_SERVICE == 'mailgun':
                return await self._send_via_mailgun(to_email, subject, html_content, text_content)
        except Exception as e:
            logger.error(f"Error sending email: {str(e)}")
            return False
        
        return False
    
    async def _send_via_sendgrid(self, to_email: str, subject: str, html_content: str, text_content: str) -> bool:
        """Send email via SendGrid"""
        try:
            from sendgrid import SendGridAPIClient
            from sendgrid.helpers.mail import Mail
            
            message = Mail(
                from_email=FROM_EMAIL,
                to_emails=to_email,
                subject=subject,
                html_content=html_content
            )
            
            if text_content:
                message.plain_text_content = text_content
            
            sg = SendGridAPIClient(SENDGRID_API_KEY)
            response = sg.send(message)
            
            return response.status_code == 202
        except ImportError:
            logger.error("SendGrid not installed. Run: pip install sendgrid")
            return False
        except Exception as e:
            logger.error(f"SendGrid error: {str(e)}")
            return False
    
    async def _send_via_mailgun(self, to_email: str, subject: str, html_content: str, text_content: str) -> bool:
        """Send email via Mailgun"""
        try:
            import aiohttp
            
            async with aiohttp.ClientSession() as session:
                async with session.post(
                    f"https://api.mailgun.net/v3/{MAILGUN_DOMAIN}/messages",
                    auth=aiohttp.BasicAuth('api', MAILGUN_API_KEY),
                    data={
                        'from': FROM_EMAIL,
                        'to': to_email,
                        'subject': subject,
                        'html': html_content,
                        'text': text_content or ''
                    }
                ) as response:
                    return response.status == 200
        except ImportError:
            logger.error("aiohttp not installed. Run: pip install aiohttp")
            return False
        except Exception as e:
            logger.error(f"Mailgun error: {str(e)}")
            return False


# Singleton instance
email_service = EmailService()


# Template functions
def get_care_plan_confirmation_email(name: str, service_type: str, weekly_cost: float, monthly_cost: float) -> dict:
    """Get care plan confirmation email content"""
    subject = "Your INFINITI Care Plan Estimate"
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Open Sans', Arial, sans-serif; line-height: 1.6; color: #414B56; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: linear-gradient(135deg, #B15BB2, #7E3F9F); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }}
            .content {{ background: white; padding: 30px; border: 1px solid #E0E0E0; }}
            .estimate {{ background: #F0E6F6; padding: 20px; border-radius: 8px; margin: 20px 0; }}
            .button {{ background: linear-gradient(135deg, #B15BB2, #7E3F9F); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }}
            .footer {{ background: #F4F4F4; padding: 20px; text-align: center; font-size: 12px; color: #999; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>INFINITI Home Care Enterprise</h1>
            </div>
            <div class="content">
                <h2>Hi {name},</h2>
                <p>Thank you for using our care plan calculator! Here's your personalized estimate:</p>
                
                <div class="estimate">
                    <h3>Your Care Plan Estimate</h3>
                    <p><strong>Service:</strong> {service_type}</p>
                    <p><strong>Estimated Weekly Cost:</strong> ${weekly_cost:,.0f}</p>
                    <p><strong>Estimated Monthly Cost:</strong> ${monthly_cost:,.0f}</p>
                </div>
                
                <p><strong>What's Next?</strong></p>
                <ul>
                    <li>A care coordinator will contact you within 24 hours</li>
                    <li>We'll schedule a free in-home assessment</li>
                    <li>Discuss your specific care needs and preferences</li>
                    <li>Finalize your personalized care plan</li>
                </ul>
                
                <p><strong>We Accept:</strong></p>
                <ul>
                    <li>✓ Georgia Medicaid Waiver Programs</li>
                    <li>✓ Peachstate Health Plan</li>
                    <li>✓ Private Pay (flexible payment plans)</li>
                    <li>✓ Long-Term Care Insurance</li>
                </ul>
                
                <p>Questions? Call us anytime at <strong>(470) 264-5566</strong></p>
                
                <a href="tel:4702645566" class="button">Call Us Now</a>
            </div>
            <div class="footer">
                <p>INFINITI Home Care Enterprise</p>
                <p>1 W Court Square, Suite 750, Decatur, GA 30030</p>
                <p>(470) 264-5566 | care@infinitihomecare.com</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    text_content = f"""
    Hi {name},
    
    Thank you for using our care plan calculator!
    
    Your Care Plan Estimate:
    Service: {service_type}
    Estimated Weekly Cost: ${weekly_cost:,.0f}
    Estimated Monthly Cost: ${monthly_cost:,.0f}
    
    What's Next?
    - A care coordinator will contact you within 24 hours
    - We'll schedule a free in-home assessment
    - Discuss your specific care needs
    - Finalize your personalized care plan
    
    We Accept: Georgia Medicaid, Peachstate, Private Pay, LTC Insurance
    
    Questions? Call (470) 264-5566
    
    INFINITI Home Care Enterprise
    1 W Court Square, Suite 750, Decatur, GA 30030
    """
    
    return {'subject': subject, 'html': html_content, 'text': text_content}


def get_waitlist_confirmation_email(name: str, waitlist_type: str) -> dict:
    """Get waitlist confirmation email content"""
    service_name = "Medicare" if waitlist_type == "medicare" else "VA Benefits"
    subject = f"You're on the {service_name} Waitlist!"
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Open Sans', Arial, sans-serif; line-height: 1.6; color: #414B56; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: linear-gradient(135deg, #B15BB2, #7E3F9F); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }}
            .content {{ background: white; padding: 30px; border: 1px solid #E0E0E0; }}
            .checkmark {{ color: #28A745; font-size: 24px; }}
            .button {{ background: linear-gradient(135deg, #B15BB2, #7E3F9F); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }}
            .footer {{ background: #F4F4F4; padding: 20px; text-align: center; font-size: 12px; color: #999; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>✓ You're on the List!</h1>
            </div>
            <div class="content">
                <h2>Hi {name},</h2>
                <p>Thanks for joining our <strong>{service_name}</strong> waitlist for INFINITI Home Care Enterprise!</p>
                
                <h3>What Happens Next?</h3>
                <ul>
                    <li><span class="checkmark">✓</span> We'll email you immediately when we're approved to accept {service_name}</li>
                    <li><span class="checkmark">✓</span> You'll get priority scheduling ahead of the general public</li>
                    <li><span class="checkmark">✓</span> No obligation - you decide if our services are right for you</li>
                </ul>
                
                <p><strong>Timeline:</strong> We expect approval in early-mid 2025</p>
                
                <hr>
                
                <h3>Need Care Now?</h3>
                <p>We currently accept:</p>
                <ul>
                    <li>Georgia Medicaid Waiver Programs</li>
                    <li>Peachstate Health Plan</li>
                    <li>Private Pay (flexible payment plans)</li>
                    <li>Long-Term Care Insurance</li>
                </ul>
                
                <a href="tel:4702645566" class="button">Call Us Today: (470) 264-5566</a>
                
                <p>Questions? Reply to this email or call us anytime.</p>
            </div>
            <div class="footer">
                <p>INFINITI Home Care Enterprise</p>
                <p>1 W Court Square, Suite 750, Decatur, GA 30030</p>
                <p>(470) 264-5566 | care@infinitihomecare.com</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    text_content = f"""
    Hi {name},
    
    Thanks for joining our {service_name} waitlist!
    
    What Happens Next:
    ✓ We'll email you when we're approved
    ✓ You'll get priority scheduling
    ✓ No obligation to use our services
    
    Timeline: Expected approval early-mid 2025
    
    NEED CARE NOW?
    We currently accept: Medicaid, Peachstate, Private Pay, LTC Insurance
    
    Call: (470) 264-5566
    
    INFINITI Home Care Enterprise
    1 W Court Square, Suite 750, Decatur, GA 30030
    """
    
    return {'subject': subject, 'html': html_content, 'text': text_content}


def get_office_notification_email(data: dict, submission_type: str) -> dict:
    """Get office notification email content"""
    subject = f"New {submission_type} Submission - INFINITI Website"
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>New {submission_type} Submission</h2>
        <div style="background: #F4F4F4; padding: 20px; border-radius: 8px;">
            <pre>{str(data)}</pre>
        </div>
        <p><strong>Action Required:</strong> Follow up within 24 hours</p>
    </body>
    </html>
    """
    
    text_content = f"New {submission_type} submission:\n\n{str(data)}"
    
    return {'subject': subject, 'html': html_content, 'text': text_content}