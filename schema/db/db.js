
const mongoose = require('mongoose');
const db = mongoose.connection;
const Player = require('../models/player');

const getPlayers = async () => {
    try {
        const playerList = await Player.find({});
        return playerList;
    } catch(err) {
        console.error(err);
    }    
};

exports.modules = getPlayers();