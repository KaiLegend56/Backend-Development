require('dotenv').config()
const express=require('express')
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/twitter',(req,res)=>{
    res.send('hello')
})
app.get('/login',(req,res)=>{
    res.send('<button>hello world nigger</button>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app is listening at port ${process.env.PORT} `);
})
