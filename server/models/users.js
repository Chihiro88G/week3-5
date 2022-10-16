/*  
  File: users.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 09
*/

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// create a model class, schema
let usersModel = mongoose.Schema({
    username: {
        type: String,
        default: '',
        trim: true,
        required: 'Username is required'
    },
    // password: {
    //     type: String,
    //     default: '',
    //     trim: true,
    //     required: 'Password is required'
    // },
    email: {
        type: String,
        default: '',
        trim: true,
        required: 'Password is required'
    },
    displayName: {
        type: String,
        default: '',
        trim: true,
        required: 'Display Name is required'
    },
    created: {
        type: Date,
        default: Date.now,
    },
    update: {
        type: Date,
        default: Date.now,
    }
},
    {
        collection: "users"
    }
);

// configure o[tions for user nodel
let options = ({ missingPassportError: 'Wrong/Missing password' });
usersModel.plugin(passportLocalMongoose, options);

module.exports.Users = mongoose.model('Users', usersModel);

// module.exports = mongoose.model('users', usersModel);