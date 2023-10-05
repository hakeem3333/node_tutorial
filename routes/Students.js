const express = require('express');
const router = express.Router()

const Students = require('../model/StudentData')

router.get('/:id',async (req, res)  => {
    let student = await Students.findById(req.params.id);
  
    if (student) {
      res.send(student);
    } else {
      res.status(404).send('Student not found');
    }
  });
  
  router.get('/', async(req, res) => {
    let students = await Students.find()
    res.send(students).status(200)
  })
  
  router.post('/', async (req, res) => {
    const {firstname, lastname, age, grade, contact} = req.body
    let student = new Students({
      firstname,
      lastname,
      age,
      grade,
      contact,
    })
    await student.save();
    res.status(201).send(student);
  });
  
  router.put('/:id', async (req, res) => {
    const {firstname, lastname, age, grade, contact} = req.body
    let student = await Students.findByIdAndUpdate(req.params.id, {
      firstname,
      lastname,
      age,
      grade,
      contact,
     })
    if (!student) {
      return res.status(404).send('Student does not exist');
    }
  
    res.send(student);
  });
  
  router.delete('/', async (req, res) => {
    const {firstname, lastname, age, grade, contact} = req.body
    let student = await Students.findByIdAndDelete(req.params.id)
      
  
    if (!student) {
      return res.status(404).send('Student not found');
    }
  
    res.send('Student has been deleted');
  });

  module.exports = router