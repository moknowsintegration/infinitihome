# INFINITI Home Care Enterprise - Railway Deployment Guide

## 🚂 Quick Deploy to Railway

Railway is the **easiest** way to deploy this fullstack app. No code changes needed!

---

## 📋 Prerequisites

1. **GitHub Account** (to save your code)
2. **Railway Account** (free): https://railway.app
3. **Optional:** SendGrid account for emails

---

## 🚀 Step-by-Step Deployment

### Step 1: Save Code to GitHub

1. In Emergent, click **"Save to GitHub"** button
2. Choose your repository (or create new one)
3. Commit message: "Deploy INFINITI Home Care website"
4. Push all changes

### Step 2: Create Railway Project

1. Go to https://railway.app
2. Sign in with GitHub
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose your INFINITI repository

### Step 3: Add MongoDB Database

1. In your Railway project, click **"+ New"**
2. Select **"Database"** → **"Add MongoDB"**
3. Wait for database to provision (1-2 minutes)
4. Click on MongoDB service
5. Go to **"Connect"** tab
6. Copy the **"Mongo Connection URL"** (looks like: `mongodb://mongo:...@containers.railway.app:port`)

### Step 4: Configure Backend Service

1. Click **"+ New"** → **"GitHub Repo"** → Select your repo again
2. Name it: **"backend"**
3. Click on the backend service
4. Go to **"Settings"** tab:
   - **Root Directory:** `backend`
   - **Build Command:** (leave empty, auto-detected)
   - **Start Command:** `uvicorn server:app --host 0.0.0.0 --port $PORT`

5. Go to **"Variables"** tab, add:
   ```
   MONGO_URL=<paste MongoDB URL from Step 3>
   DB_NAME=infiniti_homecare
   CORS_ORIGINS=*
   ```

6. **Optional - Email Configuration:**
   ```
   EMAIL_SERVICE=sendgrid
   SENDGRID_API_KEY=<your SendGrid key>
   FROM_EMAIL=care@infinitihomecare.com
   OFFICE_EMAIL=office@infinitihomecare.com
   ```

7. Go to **"Settings"** → **"Networking"** → Click **"Generate Domain"**
8. **Copy the backend URL** (e.g., `https://backend-production-xxxx.railway.app`)

### Step 5: Configure Frontend Service

1. Click **"+ New"** → **"GitHub Repo"** → Select your repo again
2. Name it: **"frontend"**
3. Click on the frontend service
4. Go to **"Settings"** tab:
   - **Root Directory:** `frontend`
   - **Build Command:** (leave empty, auto-detected)
   - **Start Command:** (leave empty, auto-detected)

5. Go to **"Variables"** tab, add:
   ```
   REACT_APP_BACKEND_URL=<paste backend URL from Step 4>
   ```
   **Example:** `REACT_APP_BACKEND_URL=https://backend-production-xxxx.railway.app`

6. **Optional - Google Analytics:**
   ```
   REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

7. Go to **"Settings"** → **"Networking"** → Click **"Generate Domain"**
8. **Copy the frontend URL** - This is your live website! 🎉

### Step 6: Verify Deployment

1. **Check Backend:**
   - Visit: `https://your-backend-url.railway.app/api/health`
   - Should see: `{"status":"healthy","service":"INFINITI Home Care API"}`

2. **Check Frontend:**
   - Visit: `https://your-frontend-url.railway.app`
   - Should see the full INFINITI website

3. **Test Forms:**
   - Try the care plan calculator
   - Submit a contact form
   - Check MongoDB to see data saved

---

## 🔧 Common Issues & Fixes

### Issue: Backend won't start

**Error:** "Module not found" or "Import error"

**Fix:**
1. Go to backend service → **"Deployments"** tab
2. Click latest deployment → View logs
3. Check if all dependencies installed
4. Verify `requirements.txt` is in `/backend` folder

### Issue: Frontend can't connect to backend

**Error:** "Network Error" or "Failed to fetch"

**Fix:**
1. Check backend is running (visit `/api/health` endpoint)
2. Verify `REACT_APP_BACKEND_URL` in frontend variables
3. Make sure backend URL includes `https://` and NO trailing slash
4. Check CORS is set to `*` in backend variables

### Issue: MongoDB connection failed

**Error:** "Connection refused" or "Authentication failed"

**Fix:**
1. Go to MongoDB service → **"Connect"** tab
2. Copy the **full** connection URL (including username/password)
3. Update backend `MONGO_URL` variable
4. Redeploy backend service

### Issue: Forms submit but no email sent

**This is normal!** Emails only work if you added SendGrid/Mailgun API key.

**To enable:**
1. Get SendGrid API key: https://app.sendgrid.com/settings/api_keys
2. Add to backend variables:
   ```
   EMAIL_SERVICE=sendgrid
   SENDGRID_API_KEY=SG.your_key_here
   FROM_EMAIL=care@infinitihomecare.com
   OFFICE_EMAIL=office@infinitihomecare.com
   ```
3. Redeploy backend

---

## 💰 Railway Pricing

- **Hobby Plan:** $5/month (500 hours included)
- **Pro Plan:** $20/month (unlimited)

**Your app uses approximately:**
- Backend: ~$5/month
- Frontend: ~$5/month
- MongoDB: ~$5/month
- **Total: ~$15/month** (with Hobby plan)

**Free Trial:** Railway gives you $5 credit to start!

---

## 🔄 Updating Your Site

### Method 1: Push to GitHub

1. Make changes in Emergent
2. Save to GitHub
3. Railway auto-deploys from GitHub
4. Changes live in 2-3 minutes!

### Method 2: Manual Redeploy

1. Go to Railway dashboard
2. Click on service (backend or frontend)
3. Click **"Deployments"** tab
4. Click **"Redeploy"** on latest deployment

---

## 📊 Monitoring Your Site

### View Logs

1. Go to Railway dashboard
2. Click on service
3. Click **"Deployments"** tab
4. Click on deployment → **"View Logs"**

### Check Database

1. Click on MongoDB service
2. Use Railway's **"Data"** tab to view collections
3. Or connect with MongoDB Compass:
   - Get connection URL from **"Connect"** tab
   - Open Compass, paste URL
   - View all submissions

### View Metrics

1. Each service shows:
   - CPU usage
   - Memory usage
   - Network traffic
   - Build times

---

## 🌐 Custom Domain (Optional)

### Connect Your Domain

1. Buy domain (e.g., infinitihomecare.com)
2. In Railway frontend service:
   - Go to **"Settings"** → **"Domains"**
   - Click **"Custom Domain"**
   - Enter your domain
3. Add DNS records (Railway shows exact records)
4. Wait for DNS propagation (10 minutes - 24 hours)
5. SSL certificate auto-generated ✅

---

## ✅ Post-Deployment Checklist

- [ ] Backend health check works
- [ ] Frontend loads correctly
- [ ] Forms save to database
- [ ] All 7 pages accessible
- [ ] Calculator works
- [ ] Phone numbers clickable
- [ ] Mobile responsive
- [ ] Email notifications (if configured)
- [ ] Analytics tracking (if configured)
- [ ] Custom domain (if added)

---

## 🆘 Need Help?

### Railway Support
- Discord: https://discord.gg/railway
- Docs: https://docs.railway.app
- Status: https://status.railway.app

### INFINITI Website Issues
- Check logs in Railway dashboard
- Review `/app/PHASE_2_3_ACTIVATION_GUIDE.md`
- Verify all environment variables

---

## 🎉 Success!

Your INFINITI Home Care Enterprise website is now live and ready to accept leads!

**Next Steps:**
1. Test all forms
2. Share URL with stakeholders
3. Configure email notifications
4. Add Google Analytics
5. Set up custom domain
6. Replace placeholder content (testimonials, caregivers)

**Your live URLs:**
- Frontend: `https://your-frontend.railway.app`
- Backend API: `https://your-backend.railway.app/api/health`

🚀 **Congratulations on your deployment!**