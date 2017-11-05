'use strict';


var mongoose = require('mongoose'),
  Student = mongoose.model('Students');

exports.list_all_students = function(req, res) {
 Student.find({}, function(err, student) {
    if (err)
      res.send(err);
   res.render('pages/index',{Student:student});
    // res.json(student);
  });
};
function getStudent(res){

}

exports.create_a_student = function(req, res, next) {
 // var new_student = new Student(req.body);
  var new_student = new Student({
    fname: req.body.fname,
    lname: req.body.lname,
    gender:req.body.gender,
    level: req.body.level,
    course:req.body.course
  });

  new_student.save(function(err, student) {
    if (err)
      res.send(err);
    Student.find({}, function(err, student) {
    if (err)
      res.send(err);
   res.render('pages/index',{Student:student});
    // res.json(student);
   });
  });
};


exports.read_a_student = function(req, res) {
  Student.findById(req.params.studentId, function(err, student) {
    if (err)
      res.send(err);
    console.log(student);
    res.render('pages/edit',{Student:student});
    // res.json(student);
  });
};


exports.update_a_student = function(req, res) {
  Student.findOneAndUpdate({_id: req.params.studentId}, req.body, {new: true}, function(err, student) {
    if (err)
      res.send(err);
      console.log(student);
    // res.json(student);
     Student.find({}, function(err, student) {
    if (err)
      res.send(err);
   res.render('pages/index',{Student:student});
    // res.json(student);
  });

  });
};


exports.delete_a_student = function(req, res) {
  Student.remove({
    _id: req.params.studentId
  }, function(err, student) {
    if (err)
      res.send(err);
    // getStudent(res);
    Student.find({}, function(err, student) {
    if (err)
      res.send(err);
   res.render('pages/index',{Student:student});
    // res.json(student);
  });
  });
};

