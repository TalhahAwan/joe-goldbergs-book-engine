import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      bookcount
      savedBooks {
          bookId
          authors
          image
          link
          description
      }
    }
  }
`;
