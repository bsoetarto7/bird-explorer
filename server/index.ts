import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Bird {
    id: ID!
    commonName: String!
    scientificName: String!
    imageUrl: String!
  }

  type Query {
    birds: [Bird!]!
  }
`;

const birds = [
  {
    id: 1,
    commonName: 'American Robin',
    scientificName: 'Turdus migratorius',
    imageUrl: 'https://placehold.co/400x300?text=American+Robin',
  },
  {
    id: 2,
    commonName: 'Bald Eagle',
    scientificName: 'Haliaeetus leucocephalus',
    imageUrl: 'https://placehold.co/400x300?text=Bald+Eagle',
  },
];

const resolvers = {
  Query: {
    birds: () => birds,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`GraphQL server ready at ${url}`);
};

void startServer();
