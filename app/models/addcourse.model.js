const mongoose = require('mongoose');

const AddcourseSchema = mongoose.Schema({
    courseName: {
        type: String
    },
    fee: {
        type: String
    },
    timeSlot: {
        type: String
    },
    tags: {
        type: String
    },
    description: {
        type: String
    },
    skills: {
        type: String
    }
});

module.exports = mongoose.model('Addcourse', AddcourseSchema);