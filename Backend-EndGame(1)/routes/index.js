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
  // & Find is used to find all users 
    res.send(allUSers)
  
})
router.get  ('/user', async function(req,res){
  // * This create method will return user thats why I kept it in variable
  const singleUser = await userModel.findOne({username:"Mathew"})
// ! when their will be no user of a particular name then this will return NULL
  //? console.log(singleUser);
    res.send(singleUser)
  
})

router.get('/delete', async function(req,res){
    const deleteUser = await userModel.findOneAndDelete({username:"Mathew"})
    res.send(deleteUser)
})

// ^ --------------SESSION-------------------------------------
router.get('/',function(req,res){
  res.session =  true
  res.render("index")
})
router.get('/checkban',function(req,res){
  console.log(req.session);
  res.send('Check kiya hain console dekho')
})

module.exports = router;
