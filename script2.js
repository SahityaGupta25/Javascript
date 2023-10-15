let exp = require('express');
let app = exp();

// Middleware
app.use(function(req,res,next){
    next();
})

// username is 'params' in JS
app.get('/profile/:username',function(req,res){
    res.send(`Ram Ram ${req.params.username}`);
})

app.listen(3000);