const express = require('express')

const router = express.Router()

//To get all workouts
router.get('/', (req, res) =>{
    res.json({msg: 'GET all workouts'})
})

//To get a single workout
router.get('/:id', (req,res) =>{
    res.json({msg: 'Get one workout'})
})

//Post a new workout
router.post('/', (req,res)=> {
    res.json({msg : 'POST a new workout'})
})

//Delete a workout
router.delete('/:id', (req,res)=> {
    res.json({msg : 'Delete a workout'})
})

//Update a workout
router.patch('/:id', (req,res)=> {
    res.json({msg : 'Update a workout'})
})
module.exports = router