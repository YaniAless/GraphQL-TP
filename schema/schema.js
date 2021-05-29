const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Player {
    id: ID!
    name: String!
    attack: String!
    defense: String!
    teamName: String!
  }

  type Team {
    id: ID!
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
    player1: String!
    player2: String!
    player3: String!
    player4: String!
    player5: String!
    player6: String!
    player7: String!
    player8: String!
    player9: String!
    player10: String!
    player11: String!
  }

  type RootQuery {
    getAllTeams: [Team]
    getTeam(name: String!): Team
    getAllPlayers: [Player]
    getPlayer(name: String!): Player
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
