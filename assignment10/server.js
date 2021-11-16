const { json, urlencoded } = require("express");
const express = require("express");

const port = 3000;

const server = express();

server.use(json());
server.use(urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.setHeader("content-Type", "text/html");
  res.sendFile(__dirname + "/index.html");
});

server.get("/welcome", (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const city = req.query.city;
  console.log(" First Name :" + firstName);
  console.log(" lastName: " + lastName);
  console.log(" cityName: " + city);
  res.setHeader("Content-Type", "text/html");
  res.sendFile(__dirname + "/welcome.html");
});

server.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
