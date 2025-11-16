const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Debug: Log the current directory and files
console.log('Current directory:', __dirname);
console.log('Public directory path:', path.join(__dirname, 'public'));

// Check if public directory exists
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  console.log('✓ Public directory exists');
  const files = fs.readdirSync(publicDir);
  console.log('Files in public:', files);
} else {
  console.error('✗ Public directory NOT FOUND!');
  console.log('Creating public directory...');
  fs.mkdirSync(publicDir, { recursive: true });
  
  // Check if index.html exists in root and copy it
  const rootIndexPath = path.join(__dirname, 'index.html');
  const publicIndexPath = path.join(publicDir, 'index.html');
  
  if (fs.existsSync(rootIndexPath)) {
    console.log('Found index.html in root, copying to public/');
    fs.copyFileSync(rootIndexPath, publicIndexPath);
  }
}

// Serve static files from public directory
app.use(express.static(publicDir));

// Root route
app.get('/', (req, res) => {
  const indexPath = path.join(publicDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(500).send('index.html not found. Check deployment logs.');
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  const indexExists = fs.existsSync(path.join(publicDir, 'index.html'));
  res.json({ 
    status: 'ok', 
    message: 'Show of Force is running!',
    indexHtmlExists: indexExists,
    publicDir: publicDir
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Show of Force tracker running on http://${HOST}:${PORT}`);
});
