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
      message: error.message,
    });
  }
}

async function createData(req, res) {
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
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}

async function updateData(req, res) {
  try {
    const { id } = req.params;

    const data = await User.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    await data.update(req.body);

    return res.json({
      status: "success",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}

async function deleteData(req, res) {
  try {
    const { id } = req.params;

    const data = await User.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    await data.destroy();

    return res.json({
      status: "success",
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}

module.exports = {
  getAll,
  createData,
  updateData,
  deleteData,
};
