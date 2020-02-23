const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { token } = require('../config/config');

//GraphQL imports
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');

// Route imports
const job = require('./job');
const user = require('./user');

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use((req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || authorization !== `Bearer ${token}`) {
    res.status(401).send({ err: 'User not authorized to use the application' });
    return;
  }
  next();
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use('/job', job);

app.use('/user', user);

server = app.listen(8081, () => {});

module.exports = server;
