const CropCycle = require("../models").CropCycle;
const Field = require("../models").Field;
const Crop = require("../models").Crop;
const Region = require("../models").Region;
const Property = require("../models").Property;

const reportService = {};

reportService.getCropCyclesByField = (field_id) => {
  return CropCycle.findAll({
    where: {
      field_id,
    },
    include: [
      {
        model: Field,
        as: "field",
        attributes: ["size", "uuid"],
      },
      {
        model: Crop,
        as: "crop",
        attributes: ["name", "uuid"],
      },
    ],
  });
};
reportService.getCropCyclesByProperty = (property_id) => {
  return CropCycle.findAll({
    include: [
      {
        model: Field,
        as: "field",
        attributes: ["size", "uuid"],
        include: [
          {
            model: Region,
            as: "region",
            attributes: ["name", "uuid"],
            include: [
              {
                model: Property,
                as: "property",
                where: {
                  id: property_id,
                },
              },
            ],
          },
        ],
      },
    ],
  });
};
module.exports = reportService;
