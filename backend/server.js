const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend
app.use(cors());
app.use(express.json());

// Simple API endpoints
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend API is running!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from the backend API!',
    version: '1.0.0'
  });
});

app.get('/api/data', (req, res) => {
  res.json({
    items: [
      { id: 1, name: 'Item 1', description: 'First item from API' },
      { id: 2, name: 'Item 2', description: 'Second item from API' },
      { id: 3, name: 'Item 3', description: 'Third item from API' }
    ]
  });
});

app.post('/api/echo', (req, res) => {
  res.json({
    message: 'Echo received',
    data: req.body
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend API server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
});
