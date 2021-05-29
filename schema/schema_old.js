const { buildSchema } = require('graphql');


const playerType = new GraphQLObjectType({
    name: 'Player',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: (obj) => {
                return obj.id;
            }
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (obj) => {
              return obj.name;
            },
        },
        attack: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (obj) => {
              return obj.name;
            },
        },
        defense: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (obj) => {
              return obj.name;
            },
        },
    }
})

const teamType = new GraphQLObjectType({
    name: 'Team',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: (obj) => {
                return obj.id;
            }
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (obj) => {
              return obj.name;
            },
        },
        players: {
            type: new GraphQLNonNull(new GraphQLList(playerType)),
            resolve: (obj) => {
              return obj.name;
            },
        },
    }
})



const queryType = new GraphQLObjectType({
name: 'Query',
fields: {
    teams: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(teamType))),
    args: {
        id : { type : GraphQLString },
        name : { type : GraphQLString },
    },
    resolve: (_, args) => {
        if (args.id != null) {
        // Récup team par id
        } else {
            // Récup team par nom
        }
    },
    },
    team: {
    type: teamType,
    args: {
        id : { type : GraphQLString },
        name : { type : GraphQLString },
    },
    resolve: (_, args) => {
        if (args.id != null) {
        // Récup team par id
        } else {
            // Récup team par nom
        }
    },
    },
    player: {
    type: playerType,
    description: 'Lookup a `Player` by its ID.',
    args: {
        id: { type : GraphQLString },
    },
    resolve: (_, args) => {
        const player = {
            id: "123",
            name: "toto",
            attack: "50",
            defense: "20"
        }
    },
    },
},
});
