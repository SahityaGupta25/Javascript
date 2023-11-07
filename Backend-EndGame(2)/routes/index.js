var express = require('express');
var router = express.Router();
const userModel = require('./users');


/* GET home page. */
router.get('/', function(req, res) {
  res.send("index")
});


router.get('/create', async function(req, res) {
  const userData = await userModel.create({
      username:"Hanuman",
      nickname:"Balaji",
      description:"I am Devotee of Lord Ram ",
      categories:["Avtar of Shiv","8-Sidhhis"]
    })
    res.send(userData)
});

router.get('/find', async function(req,res){
  var regex = new RegExp("^krIshna$",'i')
  let user = await userModel.find({username:regex})
  res.send(user)
})



module.exports = router;
