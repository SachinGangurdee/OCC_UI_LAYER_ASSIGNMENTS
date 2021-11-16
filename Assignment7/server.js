const express= require('express');
const server=  express();
const port=3000;

//to access requesr data in json format we use below middleware
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get('/',(req,resp)=>{
    resp.setHeader("Context-Type","text/html");
    resp.sendFile(__dirname+'/index.html');
});

server.post('/welcome',(req,resp)=>{
    console.log("Output for POST method");
    const firstName=req.body.firstName;
    console.log("firstName :"+firstName);
    const lastName=req.body.lastName;
    console.log("lastName :"+lastName);
    const city=req.body.city;
    console.log("city :"+city);
    resp.setHeader("Context-Type","text/html");
    resp.sendFile(__dirname+'/welcome.html');
});

//share css file
server.get('/css/style.css',(req,resp)=>{
    resp.setHeader("Context-Type","text/html");
    resp.sendFile(__dirname+'/css/style.css');
});

server.listen(port,()=>{
    console.log("server is listening at port"+port);
})