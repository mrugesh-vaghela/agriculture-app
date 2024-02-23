const organizationController = require("../controllers").organizationController;
const { isAuthenticated } = require("../controllers/authController");

module.exports = (app) => {
  app.get("/api/organization/:organizationUuid", [
    // isAuthenticated, For now it is not implemented
    organizationController.getOrganization,
  ]);

  app.post("/api/organization", [
    // isAuthenticated, For now it is not implemented
    organizationController.createOrganization,
  ]);
};
