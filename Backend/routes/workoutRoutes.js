const express = require('express');
const router = express.Router();
const Workout = require('../models/workoutModel');

//get all workouts
router.get('/', (req, res) => {
    res.json({ message: 'get all workouts' });
});

//get a single workout
router.get('/:id', (req, res) => {
    res.json({ message: 'get a single workout' });
});

//post a workout
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({
            title,
            reps,
            load
        });
        res.status(201).json({ workout });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'delete a workout' });
});

//update a workout
router.put('/:id', (req, res) => {
    res.json({ message: 'update a workout' });
});

module.exports = router;