import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      books {
        bookId
        author
        title
        description
        image
        link
      }
    }
  }
`;
