/*  
  File: books.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 09
*/

// create a router object and a mongoose object
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let bookController = require('../../controllers/books')

// helper function for guard purposes
function requireAuth(req, res, next) {
  if (!req.isAuthenticated) {
    return res.redirect('/login');
  }
  next();
}

// get router for the book list page - READ OPERATION
router.get('/', bookController.displayBookList);

/******************** added 20221005 ************************/
/*********** modified controller parts 20221014 *************/

// GET route for displaying the Add page - CREATE operation
router.get('/add', requireAuth, bookController.displayAddPage);

// POST route for processing the Add page - CREATE operation
router.post('/add', requireAuth, bookController.processAddPage);

// GET route for displaying the Edit page - UPDATE operation
router.get('/edit/:id', requireAuth, bookController.displayEditpage);

// POST route for processing the Edit page - UPDATE operation
router.post('/edit/:id', requireAuth, bookController.processEditPage);

// GET to perform Deletion - DELETE operation
router.get('/delete/:id', requireAuth, bookController.displayDeletePage);
/*********************************************************/

module.exports = router;