const exp = require('express');
const app = exp();
const path = require('path');

const about_path = path.join(__dirname,'about');

// app.use(exp.static(about_path));

// 2nd way to load page of html
app.get('/about',(req,res)=>{
    res.sendFile(`${about_path}/about.html`)

})
app.get('*',(req,res)=>{
    res.sendFile(`${about_path}/star.html`)

})

app.listen(6600);


