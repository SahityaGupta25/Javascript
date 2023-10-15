let http = require('http');
// HTTP deals with request and response only

http.createServer((req,res)=>{
    // This means my server will give 'hello' as a response 
    res.write("hello") // We can write here html   as well
    // This line tells node js to stop here 
    res.end();
}).listen(4500);



function datacontrol(req,res) {
    res.write("<h1>ProsoPRA</h1>")
    res.end();
}
http.createServer(datacontrol).listen(6600);