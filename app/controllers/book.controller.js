const Book = require('../models/book.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.tutor) {
        return res.status(400).send({
            message: "Book tutor can not be empty"
        });
    }

    // Create a Note
    const book = new Book({
        tutor: req.body.tutor,
        subject: req.body.subject,
        timing: req.body.timing,
        fees: req.body.fees
    });

    // Save Note in the database
    book.save()
    .then(data => {
        // res.send(data);
        res.status(200).json({'book': 'data saved in DB.'});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Book."
        });
    });
};