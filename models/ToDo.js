const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String
    },
    date: {
        type: Date
    },
    category: {
        type: String,
    }
})

const ToDO = mongoose.model('ToDO', todoSchema);

module.exports = ToDO