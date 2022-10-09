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
// get login page
router.get('/', function (req, res, next) {
  res.render('login', { title: "Login" },);
});

// get home page
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

// get home page
router.get('/index', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

// get BusinessContactList page
router.get('/BusinessContactList', function (req, res, next) {
  res.render('BusinessContactList', { title: 'Business Contact List' });
});

// get Update page
router.get('/Update', function (req, res, next) {
  res.render('Update', { title: 'Update' });
});

// get About page
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me' });
});

// get Projects page
router.get('/Projects', function (req, res, next) {
  res.render('Projects', { title: 'Projects' });
});

// get Services page
router.get('/Services', function (req, res, next) {
  res.render('Services', { title: 'Services' });
});

// get Contact page
router.get('/Contact', function (req, res, next) {
  res.render('Contact', { title: 'Contact' });
});

module.exports = router;
