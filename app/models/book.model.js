const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    tutor: String,
    subject: String,
    timing: String,
    fees: String,
});

module.exports = mongoose.model('Book', BookSchema);