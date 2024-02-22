const User = require("../models").User;
const { USER_TYPES } = require("../constants/db_constants");

const userService = {};
userService.createAdminUser = (user) => {
  return userService.creatUser({ ...user, role: USER_TYPES.ADMIN });
};

userService.creatUser = (user) => {
  //default role will be user
  return User.create(user);
};
module.exports = userService;
