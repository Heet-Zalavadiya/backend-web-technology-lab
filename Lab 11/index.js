const express = require('express')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { default: routerFaculty } = require('./routes/faculty')

const app = express()

mongoose.connect('MONGO_URL').then(() => {
    console.log("MongoDB Connected")
}).catch((err) => {
    console.log(err);
})

app.use(express.json())

app.use('/faculty', require('./routes/faculty'))

app.listen(3000, () => {
    console.log("Server started at 3000")
})