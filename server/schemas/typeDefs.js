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
        link: String,

    }

    input BookInput {

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {

    }
`