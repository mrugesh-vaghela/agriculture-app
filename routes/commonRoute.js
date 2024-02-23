const commonController = require("../controllers/commonController");
module.exports = (app) => {
  app.post("/api/create", commonController.create);
};
