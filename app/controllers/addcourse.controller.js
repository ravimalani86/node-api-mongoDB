const Addcourse = require('../models/addcourse.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.courseName) {
        return res.status(400).send({
            message: "Addcourse courseName can not be empty"
        });
    }

    // Create a Note
    const addcourse = new Addcourse({
        courseName: req.body.courseName,
        fee: req.body.fee,
        timeSlot: req.body.timeSlot,
        tags: req.body.tags,
        description: req.body.description,
        skills: req.body.skills
    });

    // Save Note in the database
    addcourse.save()
    .then(data => {
        console.log(data)
        // res.send(data);
        res.status(200).json({'addcourse': 'data saved in DB.'});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the addcourse."
        });
    });
};