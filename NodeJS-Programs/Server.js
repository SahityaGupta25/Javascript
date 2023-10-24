const fs = require('fs')
const http = require('http')

let text = fs.readFileSync('Demo.txt')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(text);
})
server.listen(80,'127.0.0.1',()=>{
    console.log(`Listening to Port`);
})

