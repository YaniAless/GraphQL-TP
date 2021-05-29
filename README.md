# GraphQL-TP


# Client

Requête cliente pour ajouter un joueur

```
mutation createPlayer($playerInfos: PlayerInput!) {
  createPlayer(playerInfos: $playerInfos) {
    name
  }
}
```

Requête cliente pour ajouter une équipe

```
mutation createTeam($teamInfos: TeamInput!) {
  createTeam(teamInfos: $teamInfos) {
    name
  }
}
```