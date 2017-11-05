'use strict';

var express = require('express');

module.exports = function(app){
    var todoList = require('../controllers/todoListController');

    //todoList Routes

    app.get('/create', function(req, res) {
       res.render('pages/create');
     });
    // app.get('/edit/:studentId', function(req, res) {
    //    res.render('pages/edit',);
    //  });

    app.get('/student/:studentId', todoList.delete_a_student);

    app.route('/students')
    .get(todoList.list_all_students)
    .post(todoList.create_a_student);

    app.route('/students/:studentId')
    .get(todoList.read_a_student)
    .post(todoList.update_a_student);
}
