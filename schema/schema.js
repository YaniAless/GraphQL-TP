const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Player {
    _id: ID!
    name: String!
    attack: Int!
    defense: Int!
    teamName: String!
  }

  type Team {
    _id: ID!
    name: String!
    players: [Player]
  }

  input PlayerInput {
    name: String!
    attack: Int!
    defense: Int!  
    teamName: String!  
  }

  input TeamInput {
    name: String!
    players: [PlayerInput]!
  }

  type RootQuery {
    getAllTeams: [Team]
    getTeam(name: String!): Team
    getAllPlayers: [Player]
    getPlayer(name: String!): Player
    getPlayersFromTeam(teamName: String!): [Player]!
    getPlayerByTeamName(team: String!): Player
  }

  type RootMutation {
    createTeam(teamInfos: TeamInput!): Team
    createPlayer(playerInfos: PlayerInput!): Player
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
