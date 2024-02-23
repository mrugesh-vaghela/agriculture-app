const { getToken } = require("../controllers/authController");
module.exports = (app) => {
  app.get("/api/auth/token", getToken);
};
