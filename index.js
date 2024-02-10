require("dotenv").config()
const express=require("express");

const app=express();

const port=4000;

app.get("/",(req,res)=>
{
    res.send("deepak")
})

app.get("/login",(req,res)=>
{
    res.send("bye byee")
})

app.listen(process.env.PORT,(req,res)=>
{
    console.log("we arelsitening",port)
})