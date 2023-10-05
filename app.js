require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const studentsRouter = require('./routes/Students')
app.use(express.json());

const PORT = 3000; 
 
const studentsRoute = require('./routes/Students')
app.use('/api/students', studentsRoute)



app.listen(3000, () => { 
  console.log('Server is running on port 3000');
});     

mongoose.connect(process.env.DATABASE_URL)
.then(()=>
console.log('connected to mongodb'))
.catch((err)=>
console.log('could not connect to mongodb, err', err))