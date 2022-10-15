let express = require('express');
let router = express.Router();

module.exports.displayLoginPage = (req, res, next) => {
    res.render('login', { title: "Login" });
}

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

module.exports.displayBusinessContactListPage = (req, res, next) => {
    res.render('BusinessContactList', { title: 'Business Contact List' });
}

module.exports.displayUpdatePage = (req, res, next) => {
    res.render('Update', { title: 'Update' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About Me' });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('Projects', { title: 'Projects' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('Services', { title: 'Services' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('Contact', { title: 'Contact' });
}
