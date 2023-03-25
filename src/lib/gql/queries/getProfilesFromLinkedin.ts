import { gql } from '@apollo/client';

export const GET_PROFILE_FROM_LINKEDIN = gql`
  query {
    me {
      id
      firstName
      lastName
    }
  }
`;

export interface GetProfileFromLinkedinData {
  profile: {
    id: number;
    firstName: string;
    lastName: string;
  };
}
