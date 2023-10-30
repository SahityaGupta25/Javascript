var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
// router.get('/',function(req,res){
//   res.render("index")
// })

router.get  ('/create', async function(req,res){
  // * This create method will return user thats why I kept it in variable
  const createUser = await userModel.create({
    username:'Mathew',
    age:16,
    name:'Ujjwal'
  })
  res.send(createUser);
})

router.get  ('/allusers', async function(req,res){
  // * This create method will return user thats why I kept it in variable
  const allUSers = await userModel.find()
    res.send(allUSers)
  
})
router.get  ('/user', async function(req,res){
  // * This create method will return user thats why I kept it in variable
  const singleUser = await userModel.findOne({username:"Aishya"})
// ! when their will be no user of a particular name then this will return NULL
  //? console.log(singleUser);
    res.send(singleUser)
  
})

module.exports = router;
