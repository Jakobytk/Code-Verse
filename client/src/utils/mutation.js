const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
    addThought(thoughtId: ID!, thought: String!): Profile
    removeThought(thought: String!): Thought
  }
`;

module.exports = typeDefs;