const { User } = require("../models");

async function getAll(req, res) {
  try {
    const data = await User.findAll();
    return res.json({
      status: "success",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Something went wrong",
    });
  }
}

async function create(req, res) {
  try {
    const { name, email, gender, phoneNumber } = req.body;
    const data = await User.create({
      name,
      email,
      gender,
      phone_number: phoneNumber,
    });

    return res.json({
      status: "success",
      data,
    });
  } catch (error) {}
}

module.exports = {
  getAll,
  create,
};
