/*
   File: index.ejs
   Name: Chihiro Hasegawa
   Student ID: 301229147
   Date: 2022/10/09 
*/

// install Express and create a new router
var express = require('express');
var router = express.Router();

/* GET home page. The router triggers the event whenever user goes to the main page */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Chihiro's Website" },);
});

router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/Projects', function (req, res, next) {
  res.render('Projects', { title: 'Projects' });
});

router.get('/Services', function (req, res, next) {
  res.render('Services', { title: 'Services' });
});

router.get('/Contact', function (req, res, next) {
  res.render('Contact', { title: 'Contact' });
});

module.exports = router;
