import { gql } from 'apollo-boost'


// Posts Queries
export const GET_POSTS = gql`
query {
  getPosts {
    _id
    title
    imageUrl
  }
}
`;


// User Queries

// export const GET_USERS = gql`
// query {
//     getUsers {
//         username
//     }
// }

// `


// Posts Mutations

// export const SET_POSTS = gql`
// mutation {

// }

// `


// Users Mutations