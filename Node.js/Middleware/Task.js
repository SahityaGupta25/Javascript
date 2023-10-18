const exp = require('express');
const app = exp();

// Middle ware code
const reqfilter = (req,res,next)=>{
    if (!req.query.age) {
        res.send("Please provide Age");
    }
    else if (req.query.age<18){
        res.send("You cannot Access this Page BABY!");
    }
    else{

        next();
    }
}

// Middle ware call
app.use(reqfilter)

app.get('/',(req,res)=>{
    res.send("Welcome home")
})
app.get('/users',(req,res)=>{
    res.send("Welcome to users");
})
app.get('/About',(req,res)=>{
    res.send("ABout Page");
})
app.listen(9300)