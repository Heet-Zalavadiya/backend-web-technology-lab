const express = require('express')
const app = express()
const routerFaculty = express.Router()

const fac = require('../models/faculty.model')

app.use(express.json())

routerFaculty.get('/faculty', async (req, res) => {
    try {
        const faculties = await fac.find()
        res.json({ message: "fac Fetch Successfully", allfaculty: faculties })
    }
    catch (err) {
        res.send({ err })
    }
})

routerFaculty.get('/faculty/:id', async (req, res) => {
    try {
        const faculties = await fac.findById(req.params.id)
        res.json({ message: "fac Fetch Successfully By id", faculty: faculties })
    }
    catch (err) {
        res.json({ err })
    }
})

routerFaculty.post('/faculty/add', async (req, res) => {
    try {
        const { Name, Department, PhoneNumber } = req.body

        const faculties = await fac.create({
            Name,
            Department,
            PhoneNumber
        })
        res.json({ message: "Faculty Added Successfullt ", allfaculty: faculties })
    }
    catch (err) {
        res.json({ err })
    }
})

routerFaculty.patch('/faculty/edit/:id', async (req, res) => {
    try {
        const faculties = await fac.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        )
        if (!fac) {
            return res.status(400).json({
                message: 'faculty not Found'
            })

        }
        res.json({ message: 'faculty Updated Successfully', allfaculty: faculties })
    }
    catch (err) {
        res.json({ err })
    }

})


routerFaculty.delete('/faculty/:id', async (req, res) => {
    try {
        const faculties = await fac.findByIdAndDelete(req.params.id)

        if (!fac) {
            return res.status(404).json({ message: 'faculty not found' })
        }
        res.json({ message: "faculty Deleted Successfully", faculty: faculties })
    } catch (err) {
        res.json({ err })
    }


})

module.exports=routerFaculty