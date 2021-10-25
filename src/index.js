const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const typeDefs = require("./typeDefs");

require("dotenv").config({ path: "./.env" });
const { MONGO_URI } = process.env;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

mongoose.connect(MONGO_URI).then(() => {
  console.log("Database Connected...");

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
