const User = require("../models/user");

const Query = {
  users: async () => await User.find({}),
  user: async (id) => await User.findById(id),
};

module.exports = Query;
