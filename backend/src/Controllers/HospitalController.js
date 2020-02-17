const { Hospital } = require("Models");
const { handleError } = require("Helper");

const METERS_PER_MILES = 1609.34;

const getHospitalListing = async (req, res, next) => {
  try {
    const hospitals = await Hospital.find();
    res.json({
      data: hospitals,
      success: true
    });
  } catch (err) {
    res.json({
      success: false
    });
    handleError(err);
  }
};

const getHospitalById = async (req, res, next) => {
  const { hospitalId } = req.params;
  try {
    const hospital = await Hospital.findById(hospitalId);
    res.json({
      data: hospital,
      success: true
    });
  } catch (err) {
    res.json({
      success: false
    });
    handleError(err);
  }
};

const getNearyByHospitals = async (req, res, body) => {
  try {
    const { latitude, longitude, distance, limit } = req.query;

    if (!limit) {
      limit = 5;
    }

    const nearyByHospitals = await Hospital.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [parseInt(longitude), parseInt(latitude)]
          },
          $maxDistance: distance * METERS_PER_MILES
        }
      }
    }).limit(parseInt(limit));

    res.json({
      success: true,
      data: nearyByHospitals
    });
  } catch (err) {
    res.json({
      success: false
    });
    handleError(err);
  }
};

module.exports = {
  getHospitalListing,
  getHospitalById,
  getNearyByHospitals
};
