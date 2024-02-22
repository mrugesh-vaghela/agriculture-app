const organizationController = require("../controllers").organizationController;

module.exports = (app) => {
  app.get("/api/organization/:organizationUuid", (req, res) => {
    res.status(200).send({
      message: "welcome to the Org API!",
    });
  });

  app.post("/api/organization", organizationController.createOrganization);
};
