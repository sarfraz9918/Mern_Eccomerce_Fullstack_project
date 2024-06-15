const adminModel = require("../models/adminModel");

const adminUserCheck = async (req, res) => {
    try {
        const { name, password } = req.body;

        const user = await adminModel.findOne({ userid: name });

        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No record existed");
        }
    } catch (error) {
        console.error("Error in adminUserCheck:", error);
        res.status(500).json("Internal Server Error");
    }
}

module.exports = {
    adminUserCheck
};
