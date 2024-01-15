const express=require('express')
const app =express();
require('dotenv').config()
port =3000;


app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`)
})
app.get("/twitter",(req,res)=>{
    res.send("twiter")
    
})

app.get("/youtube",(req,res)=>{
    res.send(`<h1>hello world</h1>`)
})

app.get("/login",(req,res)=>{
    res.send(`<h1>Muhammad talha</h1>`)
})