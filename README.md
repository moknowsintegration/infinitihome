# INFINITI Home Care Enterprise

Atlanta's Premier Private Home Care Service - Full-stack web application with FastAPI backend, React frontend, and MongoDB database.

## 🌟 Features

- **Care Plan Calculator** - Real-time cost estimation
- **Payment Options** - Medicaid, Peachstate, Private Pay, LTC Insurance
- **Waitlist System** - Medicare & VA Benefits coming soon
- **7 Landing Pages** - SEO-optimized for different services
- **Email Notifications** - Automated confirmations (when configured)
- **Analytics Ready** - Google Analytics 4 integration
- **Mobile Responsive** - Works on all devices

## 🏗️ Tech Stack

- **Frontend:** React 18, Tailwind CSS, React Router
- **Backend:** FastAPI (Python), Pydantic
- **Database:** MongoDB
- **Email:** SendGrid / Mailgun (optional)
- **Analytics:** Google Analytics 4 (optional)

## 📁 Project Structure

```
/app/
├── backend/              # FastAPI backend
│   ├── server.py        # Main API application
│   ├── services/        # Email service
│   └── requirements.txt # Python dependencies
├── frontend/            # React frontend
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   └── utils/      # Utilities (API, analytics)
│   └── public/         # Static assets
└── PHASE_2_3_ACTIVATION_GUIDE.md
```

## 🚀 Deployment Options

### Option 1: Railway (Recommended)

**One-Click Deploy:**

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new)

**Manual Setup:**

1. **Create Railway Account:** https://railway.app

2. **Create New Project** → "Deploy from GitHub repo"

3. **Add MongoDB:**
   - Click "+ New"
   - Select "Database" → "Add MongoDB"
   - Copy the `MONGO_URL` connection string

4. **Configure Backend Service:**
   - Add service → Select your repo
   - Set Root Directory: `backend`
   - Add environment variables:
     ```
     MONGO_URL=mongodb://...(from step 3)
     DB_NAME=infiniti_homecare
     CORS_ORIGINS=*
     ```
   - Optional email variables (see Activation Guide):
     ```
     EMAIL_SERVICE=sendgrid
     SENDGRID_API_KEY=your_key
     FROM_EMAIL=care@infinitihomecare.com
     OFFICE_EMAIL=office@infinitihomecare.com
     ```

5. **Configure Frontend Service:**
   - Add another service → Select same repo
   - Set Root Directory: `frontend`
   - Add environment variable:
     ```
     REACT_APP_BACKEND_URL=https://your-backend-url.railway.app
     ```
   - Optional:
     ```
     REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
     ```

6. **Generate Domains:**
   - Click on backend service → Settings → Generate Domain
   - Copy the backend URL
   - Update frontend's `REACT_APP_BACKEND_URL` with backend URL
   - Click on frontend service → Settings → Generate Domain
   - Your site is live! 🎉

### Option 2: Render

1. Go to https://render.com
2. Create "Web Service" for backend (Python)
3. Create "Static Site" for frontend
4. Create MongoDB on MongoDB Atlas
5. Configure environment variables

### Option 3: DigitalOcean App Platform

1. Go to https://cloud.digitalocean.com
2. Create App → Import from GitHub
3. Add components: Backend (Python), Frontend (Node.js), Database (MongoDB)
4. Configure build/run commands

## 💻 Local Development

### Prerequisites
- Python 3.9+
- Node.js 16+
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd backend

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Edit .env with your MongoDB URL

# Run server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

Backend will run on http://localhost:8001

### Frontend Setup

```bash
cd frontend

# Install dependencies
yarn install

# Create .env file
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env

# Run development server
yarn start
```

Frontend will run on http://localhost:3000

## 📧 Email Configuration (Optional)

See `/app/PHASE_2_3_ACTIVATION_GUIDE.md` for detailed setup.

**Quick Setup:**
1. Get SendGrid API key: https://app.sendgrid.com
2. Add to backend `.env`:
   ```
   EMAIL_SERVICE=sendgrid
   SENDGRID_API_KEY=SG.your_key_here
   FROM_EMAIL=care@infinitihomecare.com
   OFFICE_EMAIL=office@infinitihomecare.com
   ```
3. Restart backend

## 📊 Google Analytics (Optional)

1. Create GA4 property: https://analytics.google.com
2. Copy Measurement ID (G-XXXXXXXXXX)
3. Add to frontend `.env`:
   ```
   REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
4. Rebuild frontend

## 🗄️ Database Schema

### Collections:

1. **care_plans** - Care plan calculator submissions
2. **waitlist** - Medicare & VA Benefits waitlist
3. **contact_forms** - General contact submissions
4. **payment_verifications** - Insurance verification requests

### Example Document (care_plans):

```json
{
  "id": "uuid",
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

## 🔧 Environment Variables

### Backend (.env)

```bash
# Required
MONGO_URL=mongodb://localhost:27017
DB_NAME=infiniti_homecare
CORS_ORIGINS=*

# Optional - Email
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=
FROM_EMAIL=care@infinitihomecare.com
OFFICE_EMAIL=office@infinitihomecare.com

# Business Info
BUSINESS_PHONE=(470) 264-5566
BUSINESS_ADDRESS=1 W Court Square, Suite 750, Decatur, GA 30030
```

### Frontend (.env)

```bash
# Required
REACT_APP_BACKEND_URL=http://localhost:8001

# Optional
REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 🧪 Testing

### Backend API

```bash
# Health check
curl http://localhost:8001/api/health

# Create care plan
curl -X POST http://localhost:8001/api/care-plans \
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

### Frontend

Open http://localhost:3000 and test:
- Care plan calculator
- Form submissions
- Page navigation
- Mobile responsiveness

## 📱 Pages & Routes

- `/` - Homepage (all sections)
- `/medicare-waitlist` - Medicare waitlist signup
- `/va-benefits-waitlist` - VA benefits waitlist signup
- `/medicaid` - Georgia Medicaid information
- `/peachstate` - Peachstate Health Plan information
- `/private-pay` - Private pay options
- `/ltc-insurance` - Long-term care insurance

## 🎨 Customization

### Branding

- Logo: Update in `Navigation.js`, `HeroSection.js`, `Footer.js`
- Colors: Edit `/app/frontend/src/App.css` (CSS variables)
- Fonts: Already configured (Montserrat, Open Sans)

### Content

- **Testimonials:** `/app/frontend/src/components/home/TestimonialsSection.js`
- **Caregivers:** `/app/frontend/src/components/home/CaregiverShowcase.js`
- **Service Areas:** `/app/frontend/src/components/home/AtlantaServiceArea.js`
- **License Number:** `/app/frontend/src/components/home/TrustCredentials.js`

## 🐛 Troubleshooting

### Backend won't start

```bash
# Check MongoDB connection
mongo $MONGO_URL --eval "db.version()"

# Check Python dependencies
pip list | grep fastapi

# Check logs
tail -f /var/log/backend.log
```

### Frontend build fails

```bash
# Clear cache
rm -rf node_modules package-lock.json
yarn install

# Check Node version
node -v  # Should be 16+
```

### API calls failing

- Check `REACT_APP_BACKEND_URL` in frontend `.env`
- Verify CORS settings in backend
- Check browser console for errors

## 📞 Support

- **Activation Guide:** `/app/PHASE_2_3_ACTIVATION_GUIDE.md`
- **Email Service Setup:** See activation guide
- **Analytics Setup:** See activation guide

## 📄 License

Proprietary - INFINITI Home Care Enterprise

## 👥 Contact

- **Business:** (470) 264-5566
- **Email:** info@infinitihomecare.com
- **Address:** 1 W Court Square, Suite 750, Decatur, GA 30030

---

**Built with ❤️ for Atlanta families**