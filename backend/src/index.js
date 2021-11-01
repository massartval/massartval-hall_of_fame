const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require("@prisma/client");

const { getUserId } = require('./utils');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers: {
    Query,
    Mutation, 
    User, 
    Link,
  },
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId:
        // If there's a request object and an authorization header, triggers the function getUserId, else returns null
        req && req.headers.authorization
          ? getUserId(req)
          : null
    };
  },
});

server.listen()
  .then(({ url }) => {
    console.log(`Server is running on ${url}`);
  });