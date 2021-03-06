const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const LinkDef = require('./entities/Link');

const rootQuery = `
type Query {
    allLinks:[Link!]
}

type Mutation{
  createLink(link:newLink):Link
}
`;

module.exports = makeExecutableSchema({
  typeDefs: [rootQuery, LinkDef],
  // resolvers: resolvers
  resolvers
});
