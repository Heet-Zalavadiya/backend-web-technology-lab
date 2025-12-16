const express = require('express')

const app = express();

app.use(express.json())

app.post("/",(req,res)=>{
    const{name,email,password} = req.body;
    res.send(`name = ${name}, password = ${password}, email = ${email}`) 
})

app.get("/users/:id",(req,res)=>{
    res.send()
})