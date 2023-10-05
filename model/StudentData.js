const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = new Schema ({

  firstname:{
    type: String,
    required: true
  },
  lastname:{
    type:String,
    required: true
  },
  age:{
    type:String,
    required: true
  },
  grade:{
    type:String,
    required: true
  },
  contact:{
    type:String,
    required: true
  }
})

module.exports= mongoose.model('StudentData', studentSchema) 
