# INFINITI Home Care - Railway Deployment & Troubleshooting Guide

**Last Updated:** December 23, 2025  
**Website URL:** https://infinitihome-production.up.railway.app  
**GitHub Repo:** https://github.com/moknows-sysadmin/infinitihome

---

## 📁 PROJECT STRUCTURE (What Goes Where)

```
infinitihome/
├── main.py                 ← CRITICAL: Railway entry point (must be in ROOT)
├── requirements.txt        ← CRITICAL: Python dependencies (must be in ROOT)
├── backend/
│   ├── server.py          ← Your FastAPI application code
│   ├── requirements.txt   ← Backup copy of dependencies
│   └── services/
│       └── email_service.py
├── frontend/
│   ├── package.json       ← React dependencies
│   ├── src/               ← React source code
│   └── public/            ← Static files
├── README.md
└── [this file]
```

---

## 🔑 CRITICAL FILES RAILWAY NEEDS

### 1. `main.py` (Root Folder)
**Purpose:** Tells Railway where your app is located

```python
# Main entry point for Railway deployment
import sys
from pathlib import Path

# Add backend directory to Python path
backend_path = Path(__file__).parent / "backend"
sys.path.insert(0, str(backend_path))

# Import the FastAPI app from server.py
from server import app
```

**If this file is missing:** You'll see `Error loading ASGI app. Could not import module "main"`

---

### 2. `requirements.txt` (Root Folder)
**Purpose:** Lists all Python packages Railway needs to install

**If this file is missing or in wrong location:** Build will fail or app won't start

---

## 🚨 COMMON ERRORS & HOW TO FIX THEM

### Error 1: "Could not import module main"
```
ERROR: Error loading ASGI app. Could not import module "main".
```

**What it means:** Railway can't find your `main.py` file

**How to fix:**
1. Make sure `main.py` exists in the ROOT folder (not inside backend/)
2. Go to GitHub → Upload `main.py` to root
3. Railway will auto-redeploy

---

### Error 2: "ModuleNotFoundError: No module named 'xyz'"
```
ModuleNotFoundError: No module named 'fastapi'
```

**What it means:** A Python package is missing from requirements.txt

**How to fix:**
1. Add the missing package to `requirements.txt` in ROOT folder
2. Commit and push to GitHub
3. Railway will reinstall dependencies

---

### Error 3: "Application startup failed" or MongoDB errors
```
KeyError: 'MONGO_URL'
```

**What it means:** Environment variables are not set in Railway

**How to fix:**
1. Go to Railway dashboard → Your project → Variables tab
2. Add missing variables (see Environment Variables section below)

---

### Error 4: Build succeeds but site shows "Not Found"
```json
{"detail":"Not Found"}
```

**What it means:** The API is working! This is normal for the root URL.

**To verify API is working:** Visit `/api/` endpoint
- Example: https://infinitihome-production.up.railway.app/api/

---

## ⚙️ ENVIRONMENT VARIABLES (Railway Dashboard)

Go to: Railway Dashboard → infinitihome → Variables

**Required Variables:**
| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| `DB_NAME` | Database name | `infinitihome` |
| `PORT` | Server port (Railway sets this) | `8080` |

**Optional Variables (for email):**
| Variable | Description |
|----------|-------------|
| `SENDGRID_API_KEY` | For sending emails |
| `OFFICE_EMAIL` | Where to send notifications |
| `CORS_ORIGINS` | Allowed frontend URLs |

---

## 🔧 HOW TO REDEPLOY (Step by Step)

### Method 1: Automatic (When You Push to GitHub)
1. Make changes to your code
2. Commit and push to GitHub
3. Railway automatically detects changes
4. New deployment starts within 1-2 minutes

### Method 2: Manual Redeploy
1. Go to https://railway.app
2. Click on your `infinitihome` project
3. Click on the service (web app)
4. Click "Deployments" tab
5. Click the three dots (...) on latest deployment
6. Click "Redeploy"

---

## 🩺 TROUBLESHOOTING CHECKLIST

When your site goes down, check these IN ORDER:

### Step 1: Check Railway Status
- Go to: https://status.railway.app
- If Railway is down, wait for them to fix it

### Step 2: Check Deployment Status
1. Go to Railway dashboard
2. Look at your service - is it "Active" or "Failed"?
3. If Failed, click to see error logs

### Step 3: Check Deploy Logs
1. Click on your service
2. Click "Deploy Logs" tab
3. Look for RED error messages
4. Common errors listed above

### Step 4: Check These Files Exist in GitHub ROOT:
- [ ] `main.py` 
- [ ] `requirements.txt`

### Step 5: Check Environment Variables
1. Railway dashboard → Variables tab
2. Verify `MONGO_URL` and `DB_NAME` are set

### Step 6: Try Manual Redeploy
1. Railway dashboard → Deployments → Redeploy

---

## 📊 HEALTH CHECK URLS

Use these to verify your site is working:

| URL | Expected Response |
|-----|-------------------|
| `/api/` | `{"message":"INFINITI Home Care Enterprise API"}` |
| `/api/health` | `{"status":"healthy","service":"INFINITI Home Care API"}` |

**Full URLs:**
- https://infinitihome-production.up.railway.app/api/
- https://infinitihome-production.up.railway.app/api/health

---

## 🗄️ DATABASE (MongoDB)

**MongoDB Atlas Dashboard:** https://cloud.mongodb.com

**Collections in your database:**
- `care_plans` - Care plan calculator submissions
- `waitlist` - Medicare/VA waitlist signups
- `contact_forms` - Contact form submissions
- `payment_verifications` - Insurance verification requests

---

## 📧 EMAIL SERVICE STATUS

**Current Status:** Not configured (emails won't send)

**To enable emails:**
1. Create SendGrid account at https://sendgrid.com
2. Get API key
3. Add to Railway Variables: `SENDGRID_API_KEY=your_key_here`
4. Add: `OFFICE_EMAIL=your-email@infinitihomecare.com`

---

## 🆘 EMERGENCY CONTACTS & RESOURCES

**Railway Support:**
- Dashboard: https://railway.app/dashboard
- Status Page: https://status.railway.app
- Discord: https://discord.gg/railway

**MongoDB Support:**
- Dashboard: https://cloud.mongodb.com
- Status: https://status.cloud.mongodb.com

**GitHub Repo:**
- https://github.com/moknows-sysadmin/infinitihome

---

## 📝 CHANGE LOG

| Date | Change | Who |
|------|--------|-----|
| Dec 23, 2025 | Added `main.py` to root - fixed "module main" error | Claude + Mo |
| Dec 23, 2025 | Copied `requirements.txt` to root folder | Claude + Mo |
| Oct 2025 | Initial deployment | - |

---

## 💡 QUICK REFERENCE CARD

```
SITE DOWN? DO THIS:

1. Check https://status.railway.app
   └─ If Railway down → Wait

2. Check Railway Dashboard → Is service "Active"?
   └─ If "Failed" → Check Deploy Logs for error

3. Common fix: Make sure these files are in GitHub ROOT:
   └─ main.py
   └─ requirements.txt

4. Still broken? → Manual Redeploy in Railway

5. Still broken? → Check Environment Variables in Railway

6. Still broken? → Ask Claude with screenshot of error!
```

---

*This guide created after the Dec 23, 2025 outage to help future troubleshooting.*
