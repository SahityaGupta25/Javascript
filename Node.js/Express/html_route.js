const express = require('express');

const app = express();

app.get('/',(req,res)=>{
     res.send([{name:'mathew',Age:'16'},{name:'John',Age:46}])
}).listen(9300);