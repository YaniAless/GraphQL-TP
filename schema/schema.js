const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Player {
    id: ID!
    name: String!
    attack: String!
    defense: String!
  }

  type Team {
    id: ID!
    name: String!
    players: [Player]
  }

  type RootQuery {
    teams: [Team]
    team(name: String!): Team
    players: [Player]
    player(name: String!): Player
  }
  schema {
    query: RootQuery
  }
`);
