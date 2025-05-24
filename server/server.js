const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const movieRoutes = require('./routes/movieRoutes');
app.use('/api/movies', movieRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => console.log('Server is running on http://localhost:5000'));
  })
  .catch(err => console.error(err));
