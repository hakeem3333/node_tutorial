// const http = require('http');
const router = require("./app")
const express = require('express')
const app = express();
app.use(express.json());

//You need to change to "/api/students"
//This define the base of your apiEndpoint for students
app.use("/", router)

const PORT = 3000;  

//This another way of creating the server with in-built node 'http' module
// const server = http.createServer((req, res) => {
//  console.log('request book')

// });



//This the way to create sever with express
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
