const express = require('express')

const app = express();

app.get('/home',(req,res)=>{
    res.send("Hello world from home")
})

app.get('/about',(req,res)=>{
    res.send("Hello world from about")
})

app.get('/contact',(req,res)=>{
    res.send("Hello world from contact")
})

app.get('/page',(req,res)=>{
    res.send("Hello world from page")
})

app.get('/main',(req,res)=>{
    res.send("Hello world from main")
})


app.listen(3000,()=>{
    console.log("Server started at port 3000")
})
