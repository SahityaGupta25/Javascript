const express = require('express')
const app = express()

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded{extende: true})
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res) => {
res.send('Hello')
})

