require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routerRoute = require('./route/routes')
const userRoutes = require('./route/user')

// Express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// End points

app.use('/api/workouts', routerRoute)
app.use('/api/user', userRoutes)
    

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('listening on port :', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
    

