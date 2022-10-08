/*  
  File: books.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 09
*/

let mongoose = require('mongoose');
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