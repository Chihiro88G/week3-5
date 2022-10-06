/*
   File: index.ejs
   Name: Chihiro Hasegawa
   Student ID: 301229147
   Date: 2022/10/09 
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Chihiro's Website" },);
});

router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/Products', function (req, res, next) {
  res.render('Products', { title: 'Products' });
});

router.get('/Services', function (req, res, next) {
  res.render('Services', { title: 'Services' });
});

router.get('/Contact', function (req, res, next) {
  res.render('Contact', { title: 'Contact' });
});
module.exports = router;
