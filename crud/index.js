const express = require("express")
const mongoose = require("mongoose")
const app = express();

const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.mongourl)
    .then(() => { console.log("DB connected") })
    .catch((err) => {
        console.log(err)
    });

const User = require("./user")

app.use(express.json())

app.get("/user", async (req, res) => {
    try {
        const user = await User.find()
        res.json({ message: "User fetched succefully ", allUsers: user })
    } catch (err) {
        res.json(err)
    }
})

app.post("/register", async (req, res) => {
    try {
        const { name, email, password, phone } = req.body
        const user = await User.creat({
            name,
            email,
            password,
            phone
        })
    } catch (err) {
        res.json(err)
    }
})

app.listen(3000)