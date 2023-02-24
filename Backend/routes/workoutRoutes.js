const express = require('express');
const router = express.Router();

const {
    getWorkouts,
    getWorkout,
    postWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

//get all workouts
router.get('/', getWorkouts);

//get a single workout
router.get('/:id', getWorkout);

//post a workout
router.post('/', postWorkout);

//delete a workout
router.delete('/:id', deleteWorkout);

//update a workout
router.put('/:id', updateWorkout);

module.exports = router;