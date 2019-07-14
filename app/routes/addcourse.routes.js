module.exports = (app) => {
    const addcourse = require('../controllers/addcourse.controller.js');

    // Create a new Note
    app.post('/addcourse', addcourse.create);
}