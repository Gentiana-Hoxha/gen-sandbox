import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';

export const typeDefs = `#graphql
  type Query {
    hello: String
    resolved: String
  }
`;

export const resolvers = {
  Query: {
    resolved: () => 'Resolved',
  },
};

// highlight-start
export const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'Hello',
};
// highlight-end

// export const serverMocked = new ApolloServer({
//   schema: addMocksToSchema({
//     schema: makeExecutableSchema({ typeDefs, resolvers }),
//     mocks, // highlight-line
//   }),
// });

