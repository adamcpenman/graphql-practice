const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
    getBooks: [Book]!
  }

  # Scalar types

  type Book {
    id: ID!
    title: String!
    pageCount: Int
    author: Author!
    genre: Genre
  }

  enum Genre {
    HORROR
    ROMANCE
    FANTASY
    COMEDY
  }

  type Author {
    id: ID!
    books: [Book]!
    firstName: String
  }
`;

module.exports = typeDefs;
