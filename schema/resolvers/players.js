const mongoose = require('mongoose');
const Player = require('../models/player');
const Team = require('../models/team');

module.exports = {
    getAllPlayers: async () => {
        try{
            const playerList = await Player.find({});
            return playerList;
        } catch (err) {
            throw err;
        }
    },
    getPlayer: async (args) => {
        try{
            const player = await Player.findOne({ name: args.name });
            return player;
        } catch (err) {
            throw err;
        }
    },
    getPlayersFromTeam: async (args) => {
        try{
            const player = await Player.find({ teamName: args.teamName});
            return player;
        } catch (err) {
            throw err;
        }
    },
    createPlayer: async (args) => {
        try{
            const player = await Player.create(new Player({
                name: args.playerInfos.name,
                attack: args.playerInfos.attack,
                defense: args.playerInfos.defense,
                teamName: args.playerInfos.teamName,
            }));
            const team = await Team.findOneAndUpdate(
                { name: args.playerInfos.teamName }, 
                { $push: { players: player }, 
                option: { useFindAndModify: false }})
            return player;
        } catch (err) {
            throw err;
        }
    }
}