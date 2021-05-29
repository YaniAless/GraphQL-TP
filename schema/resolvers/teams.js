module.exports = {
    teams: async () => {
        try{
            fetch()
        } catch (err) {
            throw err;
        }
    },
    team: async (args) => {
        try{
            const team = {
                id: args.id,
                name: "name",
                players: [Player]
            }
            return team;
        } catch (err) {
            throw err;
        }
    },
}