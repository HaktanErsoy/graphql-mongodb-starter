const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String!
    users: [User!]!
    user: User!
  }

  type Mutation {
    createUser(data: UserInput): User!
    removeUser(id: ID!): User!
  }

  input UserInput {
    name: String!
    password: String!
    email: String!
    avatar: String
  }
  type User {
    name: String!
    password: String!
    email: String!
    avatar: String
  }
`;

module.exports = typeDefs;
