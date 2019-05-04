import { ApolloServer, gql } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';

const typeDefs = gql`
  type Notes {
    title: String
    description: String
    accountId: Int
  }

  type Query {
    listNotes: [Notes]
  }
`;

const resolvers = {
  Query: {
    listNotes: (parent, args, context, info) => {
      return [];
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
});


WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end();
  }
});

