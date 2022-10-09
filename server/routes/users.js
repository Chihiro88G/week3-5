/*  
  File: users.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 09
*/

// create a router object and a mongoose object
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to usersModel
let Users = require('../models/users');

// get router for the users page - READ OPERATION
router.get('/', (req, res, next) => {
  Users.find((err, users) => {
    if (err) {
      return console.error(err);
    } else {
      // console.log(users);
      res.render('users', { title: 'Business Contact List', users: users })
    }
  });
});

// GET route for displaying the Edit page - UPDATE operation
router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id;
  Users.findById(id, (err, userToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render('user/edit', { title: 'Edit User', user: userToEdit });
    }
  })
});

// POST route for processing the Edit page - UPDATE operation
router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id;
  let updatedUser = Users({
    "_id": id,
    "username": req.body.username,
    "password": req.body.password,
    "email": req.body.email
  })
  Users.updateOne({ _id: id }, updatedUser, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/users');
    }
  })
});

module.exports = router;
