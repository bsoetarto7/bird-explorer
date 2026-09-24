export const typeDefs = `#graphql
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
