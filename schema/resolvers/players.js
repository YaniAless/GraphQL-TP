const mongoose = require('mongoose');
const Player = require('../models/player');

module.exports = {
    players: async () => {
        try{
            const playerList = await Player.find({});
            return playerList;
        } catch (err) {
            throw err;
        }
    },
    player: async (args) => {
        try{
            const player = await Player.findOne({ name: "Alana"});
            return player;
        } catch (err) {
            throw err;
        }
    },
}