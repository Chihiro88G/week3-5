/*
   File: index.js
   Name: Chihiro Hasegawa
   Student ID: 301229147
   Date: 2022/10/09 
*/

// install Express and create a new router
let express = require('express');
let router = express.Router();

let indexController = require('../../controllers/index');

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
router.get('/Services', indexController.displayRegisterPage);

// get Contact page
router.get('/Contact', indexController.displayContactPage);

// GET route for displaying the Login page
router.get('/login', indexController.displayLoginPage);

// POST route for processing the Login page
router.post('/login', indexController.processLoginPage);

// GET route for displaying the Register page
router.get('/register', indexController.displayRegisterPage);

// POST route for processing the Register page
router.post('/register', indexController.processRegisterPage);

// GET route for performing user logout
router.get('/logout', indexController.performLogout);

module.exports = router;
