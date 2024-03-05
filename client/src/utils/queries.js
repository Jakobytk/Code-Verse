const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }
`;

module.exports = typeDefs;