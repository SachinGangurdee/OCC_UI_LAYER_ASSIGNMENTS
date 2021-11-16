const express=require('express');
const server=express();
const port=3000;
// To access request data in json format we are using below middleware
server.use(express.json());
// To access request data from urlencoding we are using below middlware
server.use(express.urlencoded({extended:true}));

// '/'->default page/ home page
server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});
// '/welcome'->url path using POST
server.post('/welcome',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    const firstName=req.body.firstName;
    if(firstName.length==0||firstName===""){
        console.log("First Name is required ");
        resp.send('First Name is required');
    }
    else{
    console.log("POST First Name :"+firstName);    
    resp.sendFile(__dirname+'/welcome.html');
    }

    const lastName=req.body.lastName;
    if(lastName.length==0||lastName===""){
        console.log("Last Name is required ");
        resp.send('Last Name is required');
    }
    else{
    console.log("POST Last Name :"+lastName);    
    resp.sendFile(__dirname+'/welcome.html');
    }

    const city=req.body.city;
    if(city.length==0||city===""){
        console.log("City is required ");
        resp.send('City is required');
    }
    else{
    console.log("POST city :"+city);    
    resp.sendFile(__dirname+'/welcome.html');
    }
    
});
//share the css file
server.get('/css/style.css',(req,resp)=>{
        resp.sendFile(__dirname+'/css/style.css');
});

//share the css file
server.get('/js/validate.js',(req,resp)=>{
    resp.sendFile(__dirname+'/js/validate.js');
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});
