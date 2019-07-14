const User = require('../models/user.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.firstName) {
        return res.status(400).send({
            message: "user firstName can not be empty"
        });
    }

    // Create a Note
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailID: req.body.emailID,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        c_password: req.body.c_password,
        gender: req.body.gender,
        applyAs: req.body.applyAs,
        securityQuestion: req.body.securityQuestion,
        securityAnswer: req.body.securityAnswer
    });

    // Save Note in the database
    user.save()
    .then(data => {
        // res.send(data);
        res.status(200).json({'User': 'data saved in DB.'});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Book."
        });
    });
};