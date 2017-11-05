'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
  fname: {
    type: [{
      type: String,
    required: 'Kindly enter your first name'
  }],
},

  lname: {
    type: [{
      type: String,
    required: 'Kindly enter your last name'
  }],
},
  gender: {
    type: [{
      type: String,
    enum: ['select gender','Male','Female']
  }],
  default: ['select gender']
    // required: 'select one of the two options'
  },

  course: {
    type: [{
      type: String,
      enum: ['select One','Accounting','Agriculture','Computer & Infomation System','Engineering','Software Engineering','Business Analyst','Project Management']
    }],
    default: ['Engineering']
    // required: 'Kindly enter the course of study'
  },

  level: {
    type: [{
      type: String,
      enum: ['100 level', '200 level', '300 level', '400 level']
    }],
    default: ['100 level']
  },

  Created_date: {
    type: Date,
    default: Date.now
  }


});

module.exports = mongoose.model('Students', StudentSchema);