import { gql } from  '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
        email
        skills
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
        email
        skills
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      email
      skills
    }
  }
`;

export const REMOVE_PROFILE = gql`
  mutation removeProfile {
    removeProfile {
      _id
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      email
      skills
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtId: ID!, $thought: String!) {
    addThought(thoughtId: $thoughtId, thought: $thought) {
      _id
      name
    }
  }
`;

export const REMOVE_THOUGHT = gql`
  mutation removeThought($thought: String!) {
    removeThought(thought: $thought) {
      _id
      name
    }
  }
`;