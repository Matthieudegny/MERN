require('dotenv').config()

const express = require('express')
const mongoose = require ('mongoose')

//calling the file workout.js with all routes
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
//to catch all the data send through request's body
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//using routes
//first params is the path, when the request is /api/workouts, 
//then i recieve the second params
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  
  .catch((err) => {
    console.log(err)
  }) 