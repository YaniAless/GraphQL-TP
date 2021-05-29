const express = require('express');
const expressGraphQL = require('express-graphql');
const graphql = require('graphql');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');


const graphQlSchema = require('./schema/schema');
const graphQlResolvers = require('./schema/resolvers/index');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const player = require('./schema/models/player');

const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" +process.env.DB_HOST + "/" + process.env.DB_NAME + "?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', async () => {
  console.log("Connected to db");
})

app.use(bodyParser.json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
    pretty: true
  })
);

app.use('/', (req, res) => {
  res.redirect('/graphql');
});

app.listen(4000, () => {
  console.log(`Server is listening on http://localhost:4000`);
});