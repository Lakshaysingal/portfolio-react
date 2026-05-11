# Deployment & Form Fix Guide

## 🔧 Problem
Form submissions were failing after deployment because the frontend doesn't know the backend URL.

## ✅ Solutions Implemented

### 1. **Frontend Configuration** (.env)
```env
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```
Replace with your actual Render backend URL.

### 2. **Backend CORS Fix** 
- Updated CORS configuration to properly handle production URLs
- Backend now accepts requests from `FRONTEND_URL` environment variable
- Automatically filters invalid origins

### 3. **Environment Variables Setup**

#### Backend (render.yaml updated)
Set these on Render dashboard for portfolio-backend:
- `FRONTEND_URL` → https://lakshayportfolio-sigma.vercel.app/
- `MAIL_USER` → Your Gmail
- `MAIL_PASSWORD` → Your Gmail App Password
- `ADMIN_EMAIL` → Your email
- `MAIL_SERVICE` → gmail

#### Frontend (.env)
```env
VITE_BACKEND_URL=https://portfolio-backend.onrender.com
```
(Replace with your actual backend URL)

## 🚀 Deployment Steps

### Backend (Render)
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Find your `portfolio-backend` service
3. Go to **Environment** tab
4. Set all environment variables from render.yaml
5. Redeploy the service

### Frontend (Vercel)
1. Create/update `.env.production` with your backend URL:
   ```env
   VITE_BACKEND_URL=https://your-backend-name.onrender.com
   ```
2. Push to GitHub
3. Vercel will auto-deploy

## 📝 Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:5000`

### Frontend
```bash
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

## 🔍 Troubleshooting

If still getting "Error submitting form":

1. **Check browser console** - Look for CORS errors
   - If CORS error: Verify `FRONTEND_URL` is set on Render
   
2. **Check backend logs** - On Render dashboard
   - Verify environment variables are loaded
   - Check for email configuration issues

3. **Test backend directly**
   ```bash
   curl https://your-backend-url.onrender.com/api/health
   ```
   Should return: `{"status":"OK","message":"Server is running"}`

4. **Verify frontend has correct backend URL**
   - Check Network tab in browser DevTools
   - Look at the fetch request URL being sent

## 📋 Environment Variables Reference

### Frontend (.env)
- `VITE_BACKEND_URL` - Backend API URL (e.g., https://portfolio-backend.onrender.com)

### Backend (.env / render.yaml)
- `FRONTEND_URL` - Frontend URL for CORS (e.g., https://lakshayportfolio-sigma.vercel.app)
- `MAIL_SERVICE` - Email service (gmail)
- `MAIL_USER` - Gmail address
- `MAIL_PASSWORD` - Gmail App Password (16-char code from Gmail settings)
- `ADMIN_EMAIL` - Where contact form emails are sent
- `PORT` - Server port (5000)
- `NODE_ENV` - Environment (production/development)
