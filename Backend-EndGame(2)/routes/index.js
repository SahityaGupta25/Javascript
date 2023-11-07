var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.send("index")
});


router.get('/create', async function(req, res) {
  const userData = await userModel.create({
      username:"Mathew",
      nickname:"Ujjwal",
      description:"I am Rich",
      categories:["Healthy","Wealthy","Kind","Generous","Tall","Responsible"]
    })
    res.send(userData)
});



module.exports = router;
