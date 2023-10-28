const express = require('express')
const app = express()

//^ Template Engine
app.set("view engine","ejs"); 

//^ Including static folder
app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000);
