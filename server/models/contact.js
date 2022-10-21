/*  
  File: contact.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 09
*/

let mongoose = require('mongoose');

// create a model class, schema
let contactModel = mongoose.Schema({
    username: String,
    email: String,
    displayName: String
},
    {
        collection: "users"
    }
);

module.exports = mongoose.model('user', contactModel);