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