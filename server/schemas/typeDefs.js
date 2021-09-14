const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: []
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!) : Auth
        saveBook(authors: Array!, bookId: ID!, description: String!, title: String!, image: String!, link: String!) : User
        deleteBook(bookId: ID) : User
    }
`;

module.exports = typeDefs;