import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import cors from 'cors';
import express from 'express';

import { resolvers } from './graphql/resolvers.js';
import { typeDefs } from './graphql/typeDefs.js';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();

  app.use('/graphql', cors(), express.json(), expressMiddleware(server));

  app.listen(4000, () => {
    console.log('GraphQL server ready at http://localhost:4000/graphql');
  });
};

void startServer();
