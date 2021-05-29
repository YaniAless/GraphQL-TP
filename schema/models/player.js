const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    attack: {
        type: String,
        required: true
    },
    defense: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    }
  });

module.exports = mongoose.model('Player', playerSchema)