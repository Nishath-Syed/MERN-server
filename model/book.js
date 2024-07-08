//mongo db user schema which is capable of storing data in my mongodb
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author_id: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Book', bookSchema);

