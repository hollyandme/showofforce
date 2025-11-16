# Show of Force - Habit Tracker

Deploy this habit tracker to Railway in minutes!

## 🚀 Quick Deploy to Railway

**IMPORTANT: Make sure to upload ALL files including the `public` folder!**

### File Structure (Required)
```
your-project/
├── server.js           ← Express server
├── package.json        ← Dependencies
├── package-lock.json   ← Lock file (important!)
├── index.html          ← Backup (in root)
├── railway.json        ← Railway config
├── nixpacks.toml       ← Build config
├── Procfile           ← Process config
└── public/            ← MUST include this folder!
    └── index.html     ← Your habit tracker
```

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect and deploy!

### Option 2: Deploy with Railway CLI

1. **Install Railway CLI:**
   ```bash
   npm i -g @railway/cli
   ```

2. **Login to Railway:**
   ```bash
   railway login
   ```

3. **Initialize and Deploy:**
   ```bash
   railway init
   railway up
   ```

4. **Generate a domain:**
   ```bash
   railway domain
   ```

### Option 3: Deploy from Local Directory

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from local directory"
3. Select this folder
4. Railway will deploy automatically!

## 📁 Project Structure

```
show-of-force/
├── server.js          # Express server
├── package.json       # Node.js dependencies
├── public/
│   └── index.html     # Your habit tracker
└── README.md          # This file
```

## 🔧 Local Development

Run locally before deploying:

```bash
npm install
npm start
```

Visit: `http://localhost:3000`

## 🐛 Troubleshooting Railway Deployment

### Error: "Not Found" or blank page

**Check Railway Logs:**
1. Go to your Railway project
2. Click on the **Deployments** tab
3. Click on the latest deployment
4. Check the **Build Logs** and **Deploy Logs** for errors

**Common Fixes:**

1. **Verify file structure is correct:**
   ```
   your-project/
   ├── server.js
   ├── package.json
   ├── railway.json
   ├── nixpacks.toml
   ├── Procfile
   └── public/
       └── index.html
   ```

2. **Manual Railway Settings:**
   - Go to project **Settings** → **Networking**
   - Make sure a **Public Domain** is generated
   - If not, click "Generate Domain"

3. **Check Environment Variables:**
   - Settings → **Variables**
   - You should NOT need to set PORT manually (Railway does this)

4. **Force Redeploy:**
   - Go to **Deployments**
   - Click the three dots on latest deployment
   - Click **Redeploy**

5. **Test the health endpoint:**
   - Visit: `https://your-app.railway.app/health`
   - Should return: `{"status":"ok","message":"Show of Force is running!"}`

### Error creating build plan with railpack:

1. **Make sure all files are uploaded:**
   - `server.js`
   - `package.json`
   - `railway.json`
   - `nixpacks.toml`
   - `Procfile`
   - `public/index.html`

2. **Try these fixes in Railway dashboard:**
   - Go to your project Settings
   - Under "Deploy" section, set:
     - **Start Command:** `node server.js`
     - **Build Command:** `npm install`
   
3. **Manual configuration:**
   - In Railway, go to Variables tab
   - Add: `PORT` = `3000`

4. **Redeploy:**
   - Go to Deployments tab
   - Click "Redeploy"

## ✨ Features

- ✅ 46-day habit tracker (Nov 16 - Dec 31, 2025)
- 📊 Dashboard with streaks and stats
- 🏆 5 achievement badges (Silver → Diamond)
- 💾 Auto-saves progress in browser
- 🎯 Customizable mission statement

## 🎨 Tech Stack

- Pure HTML/CSS/JavaScript
- Express.js server
- localStorage for persistence
- No database needed!

---

Made with ❤️ for building better habits
