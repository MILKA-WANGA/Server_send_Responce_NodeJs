//Import http 
const http =require('http');
//create a function with request and responce arguments

//create server
const server1= http.createServer((req,res)=>
{
    console.log(req.url,req.method,req.headers);
    //process.exit();
    //Create responce
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write ('<head><title>Welcome to NodeJs page</title></head>');
    res.write('<body> <h1>Hello there welcome to NodeJs server Responce</h1></body>');
    res.write('</html>');
    res.end();

});
//set the port the server to listen at
server1.listen(2000);


