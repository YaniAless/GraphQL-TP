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
        players: {
            type: new GraphQLNonNull(GraphQLList),
            resolve: (obj) => {
              return obj.name;
            },
        },
    }
})