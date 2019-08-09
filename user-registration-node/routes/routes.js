// ** All imported modules ** //
var express = require('express');
var routes = express.Router();
var User = require('../models/user').user;
var Login = require('../models/login');

//***Api Routes*//
routes.post('/register', registerUser);
routes.post('/login', loginUser);

//**Register**//
function registerUser(req, res) {
    var newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
        status: false
    });
    User.findOne({ userName: newUser.userName }, function (err, user) {
        if (err) {
            res.status(404).send(err);
        } else {
            if (user === null) {
                newUser.status = true;
                newUser.save((err, data) => {
                    if (err) {
                        res.status(404).send(err);
                    } else {
                        res.status(200).send(data);
                    }
                });
            } else {
                newUser.status = false;
                res.status(200).send(newUser);
            }
        }
    });
}

//***Login***//
function loginUser(req, res) {
    var user = {};
    var LoginData = new Login({
        userName: req.body.userName,
        password: req.body.password
    });
    var LoginSuccessData = {};
    User.findOne({ userName: LoginData.userName }, function (err, data) {
        if (err) {
            res.status(404).send(err);
        } else {
            user = data;
            if (data === null) {
                LoginSuccessData.firstname = null;
                LoginSuccessData.success = false;
                res.status(200).send(LoginSuccessData);
            }
            else if (user.userName === LoginData.userName && user.password === LoginData.password) {
                LoginSuccessData.firstName = user.firstName;
                LoginSuccessData.success = true;
                res.status(200).send(LoginSuccessData);
            } else {
                LoginSuccessData.firstname = null;
                LoginSuccessData.success = false;
                res.status(200).send(LoginSuccessData);
            }
        }
    });
}



module.exports = {
    routes: routes
}