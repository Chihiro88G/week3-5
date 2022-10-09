/*  
  File: users.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 09
*/

let mongoose = require('mongoose');

// create a model class, schema
let usersModel = mongoose.Schema({
    username: String,
    password: String,
    email: String
},
    {
        collection: "users"
    }
);

module.exports = mongoose.model('users', usersModel);