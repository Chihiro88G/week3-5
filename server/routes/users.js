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
let Book = require('../models/users');

// get router for the users page - READ OPERATION
router.get('/', (req, res, next) => {
  Book.find((err, users) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(users);
      // res.render('book/list', { title: 'users', users: users })
    }
  });
});

module.exports = router;
