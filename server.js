const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const metroRoutes = require('./routes/metroRoutes');
const friendRequestRoutes = require('./routes/friendRequestRoutes');
require('dotenv').config();

const app = express();
const uri = process.env.DB_CONNECTION_STRING;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/metros', metroRoutes);
app.use('/api/friendRequests', friendRequestRoutes)

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});