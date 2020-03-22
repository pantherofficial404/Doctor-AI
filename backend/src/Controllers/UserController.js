const { User } = require("Models");
const { handleError } = require("Helper");

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.json({
            success:true,
            data:users,
        });
    } catch (err) {
        handleError(err);
        res.status(404);
        return res.json({
            success: false,
            error: err,
        });
    }
}

module.exports = {
    getUsers,
};
