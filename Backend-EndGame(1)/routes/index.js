var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/',function(req,res){
  res.render("index")
})

router.get  ('/create', async function(req,res){
  await userModel.create({
    username:'Mathew',
    age:16,
    name:'Ujjwal'
  })
})

module.exports = router;
