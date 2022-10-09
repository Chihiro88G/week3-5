/*  
  File: books.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 09
*/

let mongoose = require('mongoose');

// create a model class, schema
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
    {
        collection: "books"
    }
);

module.exports = mongoose.model('book', bookModel);