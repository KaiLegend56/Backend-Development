const express=require('express')
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/twitter',(req,res)=>{
    res.send('hello')
})
app.listen(port,()=>{
    console.log(`Example app is listening at port ${port} `);
})