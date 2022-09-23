// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  input Information {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(information: Information): User
    removeBook(bookId: String): User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    author: String
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
    me: User
    books(title: String): [Book]
    book(bookId: String!): Book
    users: [User]
    user(username: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
