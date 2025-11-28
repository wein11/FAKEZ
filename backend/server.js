const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
const beatsRoutes = require('./routes/beats');
const paymentRoutes = require('./routes/payments');

app.use('/api/beats', beatsRoutes);
app.use('/api/payments', paymentRoutes);

// Fallback to index.html for SPA-like navigation (if needed, though this is multi-page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
