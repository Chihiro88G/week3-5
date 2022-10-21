// create a router object and a mongoose object
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Contact = require('../server/models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, ContactList) => {
        if (err) {
            return console.error(err);
        } else {
            // console.log(ContactList);
            res.render('user/BusinessContactList',
                {
                    title: 'Business Contact List',
                    ContactList: ContactList,
                    displayName: req.user ? req.user.displayName : ''
                })
        }
    })
};

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    Contact.findById(id, (err, userToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('user/edit',
                {
                    title: 'Edit User',
                    Contact: userToEdit,
                    displayName: req.user ? req.user.displayName : ''
                });
        }
    })
};

module.exports.test = (req, res, next) => { console.log('test successfull') };

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedUser = Contact({
        "_id": id,
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email
    })
    Contact.updateOne({ _id: id }, updatedUser, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/contactList');
        }
    })
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/contactList');
        }
    })
};