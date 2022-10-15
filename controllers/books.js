let express = require('express');
let router = express.Router();

// create a reference to the model
let Book = require('../server/models/books');

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
        if (err) {
            return console.error(err);
        } else {
            // console.log(bookList);
            res.render('book/list', { title: 'bookList', bookList: bookList })
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', { title: 'Add a book' })
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.create(newBook, (err, Book) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/bookList');
        }
    })
}

module.exports.displayEditpage = (req, res, next) => {
    let id = req.params.id;
    Book.findById(id, (err, bookToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('book/edit', { title: 'Edit Book', book: bookToEdit });
        }
    })
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    })
    Book.updateOne({ _id: id }, updatedBook, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/bookList');
        }
    })
}

module.exports.displayDeletePage = (req, res, next) => {
    let id = req.params.id;
    Book.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/bookList');
        }
    })
}