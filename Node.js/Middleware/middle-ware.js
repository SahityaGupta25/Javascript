// Middle ware code
module.exports= reqfilter = (req,res,next)=>{
    if (!req.query.age) {
        res.send("Please provide Age");
    }
    else if (req.query.age<18){
        res.send("You cannot Access this Page BABY!");
    }
    else{

        next();
    }
}