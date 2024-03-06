const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    thoughts: [Thought]!
    thought(thoughtId: ID!): Thought!
  }
`;

module.exports = typeDefs;