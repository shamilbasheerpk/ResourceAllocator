const express = require("express");
const signinRouter = express.Router();
const registerdata = require("../model/register");



signinRouter.put('/userlogger', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    console.log("++++++++++++++++++++++++++++++");
    registerdata.findOne({
        name: req.body.userlogger.username,
        password: req.body.userlogger.password
    }, function (err, user) {

        if (err || user == null) {
            console.log("error");
            res.send(null);

        } else {
            res.send(user);
            console.log(user);
        }
    });

   


    // ...............................


   
});


module.exports = signinRouter;