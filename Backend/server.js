//express app
const express = require('express');
const mongoose = require('mongoose');
const WorkoutRoutes = require('./routes/workoutRoutes');
const dotenv = require('dotenv').config();
const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/workouts', WorkoutRoutes);

const port = process.env.PORT;


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB...')
        app.listen(port, () => {
            console.log(`Listening on port http://localhost:${port}...`)
        });
    })
    .catch(err => console.error('Could not connect to MongoDB...', err));