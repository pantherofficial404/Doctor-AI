const { Cab } = require("Models");
const { handleError } = require("Helper");

const addCab = async (req,res,next) => {
    try {
    const { driverName, thumbnailImage, description, rating, carName } = req.body;

    const cab = new Cab({
        driverName,
        thumbnailImage,
        description,
        rating,
        carName,
    });

    await cab.save();

    } catch(err){
        handleError(err);
        res.status(404);
        return res.json({
            success:false,
            error:err,
        });
    }
}

module.exports = {
    addCab,
};
