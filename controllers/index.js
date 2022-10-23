let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../server/config/db');

// create user model instance
let userModel = require('../server/models/users');
let User = userModel.User;


module.exports.displayLoginPage = (req, res, next) => {
    res.render('login', { title: "Login", displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayBusinessContactListPage = (req, res, next) => {
    res.render('BusinessContactList', { title: 'Business Contact List', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayUpdatePage = (req, res, next) => {
    res.render('Update', { title: 'Update', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About Me', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('Projects', { title: 'Projects', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('Services', { title: 'Services', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('Contact', { title: 'Contact', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayLoginPage = (req, res, next) => {
    // if the user is already logged in
    if (!req.user) {
        res.render('auth/login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {

            // server error
            if (err) {
                return next(err);
            }
            // is there a user login error?
            if (!user) {
                req.flash('loginMessage', 'Authentication error');
                return res.redirect('/login');
            }
            req.login(user, (err) => {

                // server error?
                if (err) {
                    return next(err);
                }

                const payload = {
                    id: user._id,
                    displayName: user.displayName,
                    username: user.username,
                    email: user.email
                }

                const authToken = jwt.sign(payload, DB.Secret, {
                    expiresIn: 604800 // 1 week
                });

                // TODO getting ready to convert to API
                // res.json({
                //     success: true, msg: 'User logged in successfully', user: {
                //         id: user._id,
                //         displayName: user.displayName,
                //         username: user.username,
                //         email: user.email
                //     }, token: authToken
                // });

                return res.redirect('/contactList');
            });
        })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {

    // if the user is not already logged in
    if (!req.user) {
        res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
    } else {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {

    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        // password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {

        // server error
        if (err) {
            console.log('Error: Inserting new user');
            if (err.name = 'UserExistsError') {
                req.flash(
                    'registerMessage',
                    'Registration Error: User already exists!'
                )
                console.log('Error: User already exists!');
            }
            return res.render('auth/register', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            })
        }
        else {
            // if no error exists, then registration is successfull

            // redirect the user and authenticate them

            // TODO getting ready to convert to API
            // res.json({ success: true, msg: 'User registered successfully' });

            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contactList');
            })
        }
    })
}

module.exports.performLogout = (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
}