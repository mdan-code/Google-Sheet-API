const express = require('express')

const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const Workout = require('../models/workoutModel')

const router = express.Router()

// GET all routes
router.get('/', getWorkouts)

// GET a single route
router.get('/:id', getWorkout)

// POST all routes
router.post('/', createWorkout)

// DELETE a route
router.delete('/:id', deleteWorkout)

// UPDATE a route
router.patch('/:id',updateWorkout)

module.exports = router