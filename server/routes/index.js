/*
   File: index.js
   Name: Chihiro Hasegawa
   Student ID: 301229147
   Date: 2022/10/09 
*/

// install Express and create a new router
let express = require('express');
let router = express.Router();

let indexController = require('../../controllers/index')

/* The router triggers the event whenever user goes to each page */
// get login page
router.get('/', indexController.displayLoginPage);

// get home page
router.get('/home', indexController.displayHomePage);

// get home page
router.get('/index', indexController.displayHomePage);

// get BusinessContactList page
router.get('/BusinessContactList', indexController.displayBusinessContactListPage);

// get Update page
router.get('/Update', indexController.displayUpdatePage);

// get About page
router.get('/about', indexController.displayAboutPage);

// get Projects page
router.get('/Projects', indexController.displayProjectsPage);

// get Services page
router.get('/Services', indexController.displayServicesPage);

// get Contact page
router.get('/Contact', indexController.displayContactPage);

module.exports = router;
