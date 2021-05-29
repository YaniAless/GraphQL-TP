const mongoose = require('mongoose');
const Team = require('../models/team');

module.exports = {
    getAllTeams: async () => {
        try{
            const teamList = await Team.find({});
            return teamList;
        } catch (err) {
            throw err;
        }
    },
    getTeam: async (args) => {
        try{
            const team = await Team.findOne({ name: args.name});
            console.log(team);
            return team;
        } catch (err) {
            throw err;
        }
    },
    createTeam: async (args) => {
        try{
            const team = await Team.create(new Team({
                name: args.teamInfos.name,
                players: args.teamInfos.players,
            }));
            return team;
        } catch (err) {
            throw err;
        }
    }
}