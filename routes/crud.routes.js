const express = require("express");
const {
  getAllStudent,
  insertStudent,
} = require("../controller/crudController");
const router = express.Router();

router.get("/getStudent", getAllStudent);
router.post("/insert_student", insertStudent);

module.exports = router;
