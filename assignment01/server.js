const http = require("http");

const port = 3000;
http.createServer((req,res)=>{
    res.write("<h1>Good morning</h1>");
    res.end();
}).listen(port,()=>{
    console.log(`Server is running at htttp://localhost:${port}`);
})