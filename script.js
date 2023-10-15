const express = require('express')
const app= express()

app.use(function(req,res,next){
    console.log("Hello Laddo Gopal");
    next();
    // next is mandatory in the end 
})

app.get('/',function(req,res){
    res.send('Hello buffalo');
})

app.listen(3000)

// npx nodemon -g 
