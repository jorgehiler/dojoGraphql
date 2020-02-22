const { gql } = require('apollo-server');

const typeDefs = gql`
    type Post{
        id: ID!
        title: String
        body: String
        comments: [Comment]! 
    }
    
    type Comment{
        id: ID
        name: String
        email: String
        body: String
    }
    type Query{
        posts: [Post]!
    }
    
`
module.exports = typeDefs

