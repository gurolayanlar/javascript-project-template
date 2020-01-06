const { gql } = require("apollo-boost");

export const GET_USERS = gql`
    query {
        users {
            firstName
            lastName
            email
        }
    }
`;