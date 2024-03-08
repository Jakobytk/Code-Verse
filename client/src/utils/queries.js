import { gql } from '@apollo/client';

export const PROFILES = gql`
  query profiles {
    profiles {
      _id
      name
      email
      skills
    }
  }
`;

export const PROFILE = gql`
  query profile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      email
      skills
    }
  }
`;

export const ME = gql`
  query me {
    me {
      _id
      name
      email
      skills
    }
  }
`;

export const THOUGHTS = gql`
  query thoughts {
    thoughts {
      _id
      name
      thought
    }
  }
`;

export const THOUGHT = gql`
  query thought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      name
      thought
    }
  }
`;