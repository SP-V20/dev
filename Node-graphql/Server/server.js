const {ApolloServer, gql} = require('apollo-server-express');

const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    greeting: String
  }
`;

const resolvers  = {
Query: {
    greeting: () => 'Hello World!👋'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;