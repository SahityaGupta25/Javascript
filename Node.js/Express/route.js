const express = require('express');

const app = express();

app.get('',(req,res)=>{
// If we get data from the browser url then we can use this and it will return data as an object
    console.log("Request by browser",req.query);
    res.send("Hello MR. Yellow");
})

app.get('/profile',(req,res)=>{
    res.send('My profile')
})
app.listen(6600);

