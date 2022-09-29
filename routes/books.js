let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to bookModel
let book = require('../models/books');
// get router for the book list page - READ OPERATION
router.get('/', (req, res, next) => {
    book.find((err, bookList) => {
        if (err) {
            return console.error(err);
        } else {
            console.log(bookList);
        }
    });
});

module.exports = router;