const regionController = require("../controllers/regionController");
module.exports = (app) => {  
  app.post("/api/region", regionController.createRegion);
};
