const typeDefs = `
  type Profile {
    _id: ID
    name: String!
    email: String!
    password: String!
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Thought {
    _id: ID
    thought: String!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    thoughts: [thought]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile

    addThought(profileId: ID!, thought: String!): Profile
  }
`;

module.exports = typeDefs;
