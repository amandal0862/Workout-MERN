const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

//Get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }

    return res.status(200).json(workout)
}

//post a workout
const postWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({
            title,
            reps,
            load
        });
        res.status(200).json({ workout });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findByIdAndDelete(id)

    res.status(200).json({message: 'Workout deleted', workout})
}

//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findByIdAndUpdate(id, req.body)

    res.status(200).json({message: 'Workout updated', workout})
}

module.exports = {
    getWorkouts,
    getWorkout,
    postWorkout,
    deleteWorkout,
    updateWorkout
}