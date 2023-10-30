

//TODO install mongoose
//TODO require and setup connection
//TODO make Schema
//TODO create model and export

const mongoose = require('mongoose')

//^ Node connect through mongoose with mongoDB on LocalHOst= 127.0.0.1 on port 27017 then create database " mybase "
mongoose.connect('mongodb://127.0.0.1:27017/mybase')

// ^ Schema (Document in DB) creation 
const userSchema = mongoose.Schema({
username:String,
name:String,
age:Number
})
        //^   (name,schema)
module.exports = mongoose.model("Users",userSchema)



