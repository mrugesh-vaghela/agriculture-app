const reportController = require("../controllers/reportController");
module.exports = (app) => {
  app.get(
    "/api/report/get-crop-cycles-by-field",
    reportController.getCropCyclesByField
  );
  app.get(
    "/api/report/get-crop-cycles-by-property",
    reportController.getCropCyclesByProperty
  );
};
