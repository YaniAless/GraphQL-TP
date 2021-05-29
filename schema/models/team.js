const mongoose = require('mongoose');
const Player = require('./player');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    players: {
        type: [Player],
        required: true
    },
  });

module.exports = mongoose.model('Team', teamSchema)