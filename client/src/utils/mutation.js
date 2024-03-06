export const ADD_PROFILE = `
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

export const LOGIN = `
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

export const ADD_SKILL = `
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      email
      skills
    }
  }
`;

export const REMOVE_PROFILE = `
  mutation removeProfile {
    removeProfile {
      _id
    }
  }
`;

export const REMOVE_SKILL = `
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      email
      skills
    }
  }
`;

export const ADD_THOUGHT = `
  mutation addThought($thoughtId: ID!, $thought: String!) {
    addThought(thoughtId: $thoughtId, thought: $thought) {
      _id
      name
    }
  }
`;

export const REMOVE_THOUGHT = `
  mutation removeThought($thought: String!) {
    removeThought(thought: $thought) {
      _id
      name
    }
  }
`;