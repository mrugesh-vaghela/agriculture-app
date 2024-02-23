const propertyController = require("../controllers/propertyController");
module.exports = (app) => {  
  app.post("/api/property", propertyController.createProperty);
};
