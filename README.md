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

Données types pour createPlayer
```
{
  "playerInfos": {
    "name": "Amelia",
    "attack": 3,
    "defense": 94,
    "teamName": "Blue Team"
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