const express = require("express");
const router = express.Router();

const UserController = require('../controllers/UserController')

/* GET users listing. */
router.get("/", UserController.getAll);
router.post("/", UserController.createData);
router.put("/:id", UserController.updateData);
router.delete("/:id", UserController.deleteData);

module.exports = router;
