/*  
  File: contact.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 09
*/

// create a router object and a mongoose object
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let contactController = require('../../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

// get router for the users page - READ OPERATION
router.get('/', contactController.displayContactList);

// GET route for displaying the Edit page - UPDATE operation
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

// POST route for processing the Edit page - UPDATE operation
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// GET to perform Deletion - DELETE operation
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;
