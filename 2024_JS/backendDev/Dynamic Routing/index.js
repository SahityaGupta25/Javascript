const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("index")
})
app.get("/:username",function(req,res,next){
    console.log(req.params.username)
    next()
})

app.listen(3000,function(){
    console.log("I am running on Port:3000");
})
