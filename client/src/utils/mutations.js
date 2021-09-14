import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login($email: String!, $password: String!) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser($username: String!, $email: String!, $password: String!) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($authors: Array!, $bookId: ID!, $description: String!, $title: String!, $image: String!, $link: String!) {
        saveBook($authors: Array!, $bookId: ID!, $description: String!, $title: String!, $image: String!, $link: String!) {
            _id
            username
            savedBooks {
                _id
                authors
                bookId
                image
                link
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation deleteBook($bookId: ID!) {
       deleteBook($bookId: ID!) {
            _id
            username
            savedBooks {
                _id
                authors
                bookId
                image
                link
                title
            }
        }
    }
`;

