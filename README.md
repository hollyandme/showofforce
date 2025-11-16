# Show of Force - Habit Tracker

Deploy this habit tracker to Railway in minutes!

## 🚀 Quick Deploy to Railway

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
