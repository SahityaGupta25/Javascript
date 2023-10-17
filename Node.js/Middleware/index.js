const exp = require('express');
const app = exp();

// Middle ware code
const reqfilter = (req,res,next)=>{
    console.log('reqfilter');
    next();
}

app.use(reqfilter)

app.get('/',(req,res)=>{
    res.send("Welcome home")
})
app.get('/users',(req,res)=>{
    res.send("Welcome to users");
})
app.listen(9300)