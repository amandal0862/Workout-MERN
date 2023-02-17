const express = require('express');
const router = express.Router();

//get all workouts
router.get('/', (req, res) => {
    res.json({message: 'get all workouts'});
});

//get a single workout
router.get('/:id', (req, res) => {
    res.json({message: 'get a single workout'});
});

//post a workout
router.post('/', (req, res) => {
    res.json({message: 'post a workout'});
});

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({message: 'delete a workout'});
});

//update a workout
router.put('/:id', (req, res) => {
    res.json({message: 'update a workout'});
});

module.exports = router;