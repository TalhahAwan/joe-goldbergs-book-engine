const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {

    }

    type Book {

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