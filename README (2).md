# INFINITI Home Care Enterprise

Atlanta's Premier Private Home Care Service - Full-stack web application with FastAPI backend, React frontend, and MongoDB database.

**Live Site:** https://infinitihome-production.up.railway.app  
**GitHub:** https://github.com/moknows-sysadmin/infinitihome

---

## 🌟 Features

- **Care Plan Calculator** - Real-time cost estimation
- **Payment Options** - Medicaid, Peachstate, Private Pay, LTC Insurance
- **Waitlist System** - Medicare & VA Benefits coming soon
- **7 Landing Pages** - SEO-optimized for different services
- **Email Notifications** - Automated confirmations (when configured)
- **Analytics Ready** - Google Analytics 4 integration
- **Mobile Responsive** - Works on all devices

---

## 🗂️ Project Structure

```
infinitihome/
│
├── main.py                  ⚠️  CRITICAL - Railway entry point (MUST be in ROOT)
├── requirements.txt         ⚠️  CRITICAL - Python dependencies (MUST be in ROOT)
│
├── backend/
│   ├── server.py            ← FastAPI application code
│   ├── requirements.txt     ← Backup copy of dependencies
│   └── services/
│       └── email_service.py ← Email notification service
│
├── frontend/
│   ├── package.json         ← React dependencies
│   ├── src/
│   │   ├── pages/           ← Page components
│   │   ├── components/      ← Reusable UI components
│   │   └── utils/           ← API calls, analytics
│   └── public/              ← Static assets
│
├── README.md                ← This file
├── RAILWAY_TROUBLESHOOTING_GUIDE.md  ← Emergency troubleshooting
├── PHASE_2_3_ACTIVATION_GUIDE.md     ← Email & analytics setup
└── RAILWAY_DEPLOYMENT_GUIDE.md       ← Deployment instructions
```

### ⚠️ CRITICAL FILES (Must Be in ROOT Folder)

| File | Purpose | If Missing |
|------|---------|------------|
| `main.py` | Tells Railway where your app is | "Could not import module main" error |
| `requirements.txt` | Lists Python packages to install | Build fails or packages missing |

---

## 🛠️ Tech Stack

- **Frontend:** React 18, Tailwind CSS, React Router, shadcn/ui
- **Backend:** FastAPI (Python), Pydantic, Uvicorn
- **Database:** MongoDB Atlas
- **Hosting:** Railway
- **Email:** SendGrid (optional)
- **Analytics:** Google Analytics 4 (optional)

---

## 🚀 Railway Deployment

Your app is deployed as a **single service** on Railway that runs the FastAPI backend.

### How It Works

```
GitHub Push → Railway Detects → Builds App → Deploys
                                    ↓
                            Runs: main.py
                                    ↓
                            Loads: backend/server.py
                                    ↓
                            Connects: MongoDB Atlas
```

### Environment Variables (Railway Dashboard)

Go to: Railway → infinitihome → Variables

**Required:**
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=infinitihome
```

**Optional (for email notifications):**
```
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=SG.your_key_here
FROM_EMAIL=care@infinitihomecare.com
OFFICE_EMAIL=office@infinitihomecare.com
```

**Optional (for CORS):**
```
CORS_ORIGINS=*
```

---

## 🔗 API Endpoints

**Base URL:** https://infinitihome-production.up.railway.app

### Health Check
| Endpoint | Method | Response |
|----------|--------|----------|
| `/api/` | GET | `{"message":"INFINITI Home Care Enterprise API"}` |
| `/api/health` | GET | `{"status":"healthy","service":"INFINITI Home Care API"}` |

### Care Plans
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/care-plans` | GET | Get all care plans |
| `/api/care-plans` | POST | Create new care plan |

### Waitlist
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/waitlist` | GET | Get all waitlist entries |
| `/api/waitlist` | POST | Add to Medicare/VA waitlist |

### Contact Forms
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | GET | Get all contact submissions |
| `/api/contact` | POST | Submit contact form |

### Benefits Verification
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/verify-benefits` | GET | Get all verification requests |
| `/api/verify-benefits` | POST | Submit verification request |

---

## 🗄️ Database (MongoDB)

**Dashboard:** https://cloud.mongodb.com

### Collections

| Collection | Purpose |
|------------|---------|
| `care_plans` | Care plan calculator submissions |
| `waitlist` | Medicare & VA Benefits signups |
| `contact_forms` | Contact form submissions |
| `payment_verifications` | Insurance verification requests |

### Example Document (care_plans)

```json
{
  "id": "uuid-string",
  "service_type": "personal_care",
  "level": "level2",
  "hourly_rate": 42,
  "hours_per_day": 6,
  "days_per_week": 5,
  "weekly_cost": 1260,
  "monthly_cost": 5456,
  "contact_info": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "(470) 264-5566"
  },
  "created_at": "2025-01-15T10:30:00Z",
  "status": "new"
}
```

---

## 💰 Pricing Rates (Configured in server.py)

| Service Type | Level | Hourly Rate |
|--------------|-------|-------------|
| Companion Care | - | $35 |
| Personal Care | Level 1 | $38 |
| Personal Care | Level 2 | $42 |
| Personal Care | Level 3 | $48 |
| Skilled Nursing | Level 1 | $56.50 |
| Skilled Nursing | Level 2 | $72.50 |
| Skilled Nursing | Level 3 | $82.50 |

---

## 🚨 TROUBLESHOOTING

### Quick Reference (Site Down?)

```
1. Check https://status.railway.app
   └─ If Railway down → Wait for them

2. Check Railway Dashboard → Is service "Active"?
   └─ If "Failed" → Check Deploy Logs for error

3. Common fix: Make sure these files are in GitHub ROOT:
   └─ main.py
   └─ requirements.txt

4. Still broken? → Manual Redeploy in Railway

5. Still broken? → Check Environment Variables

6. Still broken? → See RAILWAY_TROUBLESHOOTING_GUIDE.md
```

### Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| "Could not import module main" | `main.py` missing from root | Upload `main.py` to GitHub root folder |
| "ModuleNotFoundError" | Package missing | Add to `requirements.txt` in root |
| "KeyError: MONGO_URL" | Environment variable not set | Add in Railway → Variables |
| `{"detail":"Not Found"}` | Normal! API works | Visit `/api/` to verify |

### Full Troubleshooting Guide

See: `RAILWAY_TROUBLESHOOTING_GUIDE.md`

---

## 💻 Local Development

### Prerequisites
- Python 3.9+
- Node.js 16+
- MongoDB (local or Atlas connection)

### Backend Setup

```bash
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # Mac/Linux
# or: venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Create .env file
echo "MONGO_URL=your_mongodb_url" > .env
echo "DB_NAME=infinitihome" >> .env

# Run server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

Backend runs at: http://localhost:8001

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install --legacy-peer-deps

# Create .env file
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env

# Run development server
npm start
```

Frontend runs at: http://localhost:3000

---

## 📱 Pages & Routes

| Route | Page |
|-------|------|
| `/` | Homepage (all sections) |
| `/medicare-waitlist` | Medicare waitlist signup |
| `/va-benefits-waitlist` | VA benefits waitlist signup |
| `/medicaid` | Georgia Medicaid information |
| `/peachstate` | Peachstate Health Plan information |
| `/private-pay` | Private pay options |
| `/ltc-insurance` | Long-term care insurance |

---

## 🧪 Testing the API

```bash
# Health check
curl https://infinitihome-production.up.railway.app/api/health

# Create care plan
curl -X POST https://infinitihome-production.up.railway.app/api/care-plans \
  -H "Content-Type: application/json" \
  -d '{
    "service_type": "companion",
    "hours_per_day": 4,
    "days_per_week": 5,
    "contact_info": {
      "name": "Test User",
      "email": "test@example.com",
      "phone": "555-1234"
    }
  }'
```

---

## 📧 Email Setup (Optional)

See `PHASE_2_3_ACTIVATION_GUIDE.md` for detailed instructions.

**Quick Setup:**
1. Create SendGrid account: https://sendgrid.com
2. Get API key
3. Add to Railway Variables:
   ```
   EMAIL_SERVICE=sendgrid
   SENDGRID_API_KEY=SG.your_key_here
   FROM_EMAIL=care@infinitihomecare.com
   OFFICE_EMAIL=office@infinitihomecare.com
   ```

---

## 📊 Google Analytics (Optional)

1. Create GA4 property: https://analytics.google.com
2. Copy Measurement ID (G-XXXXXXXXXX)
3. Add to frontend environment or code

---

## 📝 Change Log

| Date | Change |
|------|--------|
| Dec 23, 2025 | Fixed Railway deployment - added `main.py` to root |
| Dec 23, 2025 | Added `RAILWAY_TROUBLESHOOTING_GUIDE.md` |
| Dec 23, 2025 | Updated README with correct project structure |
| Oct 2025 | Initial deployment |

---

## 📞 Business Contact

- **Phone:** (470) 264-5566
- **Email:** info@infinitihomecare.com
- **Address:** 1 W Court Square, Suite 750, Decatur, GA 30030

---

## 📄 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | This file - project overview |
| `RAILWAY_TROUBLESHOOTING_GUIDE.md` | Emergency troubleshooting steps |
| `RAILWAY_DEPLOYMENT_GUIDE.md` | Deployment instructions |
| `PHASE_2_3_ACTIVATION_GUIDE.md` | Email & analytics setup |

---

**Built with ❤️ for Atlanta families**
