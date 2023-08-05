const express = require("express");
const { getAllStudent } = require("../controller/crudController");
const router = express.Router();

router.get("/getStudent", getAllStudent);

module.exports = router;
