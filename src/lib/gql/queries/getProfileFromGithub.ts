import { gql } from '@apollo/client';

export const GET_PROFILE_FROM_GITHUB = gql`
  query GetProfileFromGithub($username: String!) {
    profile: user(login: $username) {
      fullName: name
      positionTitle: bio
      repositories(first: 100) {
        nodes {
          languages(first: 100) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export interface GetProfileFromGithubData {
  profile: {
    fullName: string;
    positionTitle: string;
    repositories: {
      nodes: {
        languages: {
          nodes: {
            name: string;
          }[];
        };
      }[];
    };
  };
}

export interface GetProfileFromGithubVars {
  username: string;
}
