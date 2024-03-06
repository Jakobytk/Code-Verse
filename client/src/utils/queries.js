export const PROFILES = `
  query profiles {
    profiles {
      _id
      name
      email
      skills
    }
  }
`;

export const PROFILE = `
  query profile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      email
      skills
    }
  }
`;

export const ME = `
  query me {
    me {
      _id
      name
      email
      skills
    }
  }
`;

export const THOUGHTS = `
  query thoughts {
    thoughts {
      _id
      name
      thought
    }
  }
`;

export const THOUGHT = `
  query thought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      name
      thought
    }
  }
`;