// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  input BookInformation {
    bookId: ID!
    authors: [String]
    title: String!
    description: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInformation!): User
    removeBook(bookId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    books(title: String): [Book]
    book(bookId: String!): Book
    users: [User]
    user(username: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
