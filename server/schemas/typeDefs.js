const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!,
        username: String!,
        savedBooks: [Book],
        bookCount: Int

    }

    type Book {
        bookId: String!,
        title: String!
        author: [String],
        description: String!,
        image: String,
        link: String

    }

    input BookInput {
        bookId: String!,
        title: String!
        author: [String],
        description: String!,
        image: String,
        link: String

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        saveBook(bookData: BookInput!): User
        addUser(username: String!, email: String!, password: String!): Auth
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;