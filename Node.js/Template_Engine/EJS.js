const exp = require('express');
const app = exp();
const path = require('path');

const about_path = path.join(__dirname,'about');
const profile_path = path.join(__dirname,'views/profile.ejs')
const login_path = path.join(__dirname,'views/login.ejs')


app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
    const user = {
        name:'mathew',
        work:'Developer',
        Age:'16',
        // We can use for loop on this array
        skills:['java','js','python']
    }
    res.render(profile_path,{user});
})


// app.get('/skills',(req,res)=>{
//     res.render('skills');
// })

app.get('/login',(req,res)=>{
    res.render(login_path);
})


app.listen(5000);

