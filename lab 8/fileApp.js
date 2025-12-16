const express = require('express')

const fs = require('fs')

const app = express();

app.get('/home',(req,res)=>{
    fs.readFile('home.txt',(err,data)=> {
        if(err){
            throw err;
        }
        res.send(data)
    })
})

app.get('/about',(req,res)=>{
    fs.readFile('about.txt',(err,data)=> {
        if(err){
            throw err;
        }
        res.send(data)
    })
})

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})
