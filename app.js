const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000; 

const studentsRoute = require('./routes/Students')


app.use('/students', studentsRoute)


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
