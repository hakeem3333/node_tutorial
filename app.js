const express = require('express');
const app = express();
app.use(express.json());

const studentInfo = [
  { id: 1, name: 'Bademus James', age: '23', grade: 'B', contact: 'Adekunle Ajasin' },
  { id: 2, name: 'Cross Base', age: '25', grade: 'A', contact: '345 fedreckAbel street' },
  { id: 3, name: 'Zacs Berdex', age: '29', grade: 'D', contact: 'Wanner Bros inert' },
  { id: 4, name: 'Maset Such', age: '20', grade: 'C', contact: '34, dexter road, close to' }
];

console.log(studentInfo)

app.get('/student/:id', (req, res) => {
  let student = studentInfo.find(s => s.id === parseInt(req.params.id));

  if (student) {
    res.send(student);
  } else {
    res.status(404).send('Student not found');
  }
});

app.get('/student/', (req, res) => {
  res.send(studentInfo);
});

app.post('/api/student', (req, res) => {
  let student = {
    id: studentInfo.length + 1,
    name: req.body.name,
    age: req.body.age,
    grade: req.body.grade,
    contact: req.body.contact
  };
  studentInfo.push(student);
  res.status(201).send(student);
});

app.put('/api/student/:id', (req, res) => {
  let student = studentInfo.find(s => s.id === parseInt(req.params.id));

  if (!student) {
    return res.status(404).send('Student doesn\'t exist');
  }

  student.name = req.body.name;
  student.age = req.body.age;
  student.grade = req.body.grade;
  student.contact = req.body.contact;

  res.send(student);
});

app.delete('/api/student/:id', (req, res) => {
  let student = studentInfo.find(s => s.id === parseInt(req.params.id));

  if (!student) {
    return res.status(404).send('Student not found');
  }

  const index = studentInfo.indexOf(student);
  studentInfo.splice(index, 1);

  res.send('Student has been deleted');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
