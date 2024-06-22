const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/gymRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(cors());

// Define a simple route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
