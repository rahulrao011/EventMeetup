const Registration = require("../models/registrationModel");

const registerUser = async (req, res) => {
    const { name, email } = req.body;
    // add user to DB
    try {
        const registration = await Registration.create({ name, email });
        res.status(200).json(registration);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
  }

module.exports = {
    registerUser
};