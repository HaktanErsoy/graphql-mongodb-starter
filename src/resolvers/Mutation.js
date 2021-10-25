const User = require("../models/user");

const Mutation = {
  createUser: async (parent, { data }, context, main) => {
    return await User.create(data);
  },
  removeUser: async (_, { id }) => {
    return await User.findByIdAndDelete(id);
  },
};

module.exports = Mutation;
