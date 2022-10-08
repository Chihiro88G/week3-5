/*
   File: index.js
   Name: Chihiro Hasegawa
   Student ID: 301229147
   Date: 2022/10/09 
*/

// install Express and create a new router
var express = require('express');
var router = express.Router();

/* The router triggers the event whenever user goes to each page */
// get home page
router.get('/', function (req, res, next) {
  res.render('login', { title: "Login" },);
});

// get home page
router.get('/home', function (req, res, next) {
  res.render('login', { title: 'Home' });
});

// get BusinessContactList page
router.get('/BusinessContactList', function (req, res, next) {
  res.render('BusinessContactList', { title: 'Business Contact List' });
});

// get Update page
router.get('/Update', function (req, res, next) {
  res.render('Update', { title: 'Update' });
});


module.exports = router;
