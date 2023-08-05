const express = require("express");
const {
  getAllStudent,
  insertStudent,
  deleteStudent,
  updateStudent,
} = require("../controller/crudController");
const router = express.Router();

router.get("/getStudent", getAllStudent);
router.post("/insert_student", insertStudent);
router.delete("/delete_student", deleteStudent);
router.post("/update_student", updateStudent);

module.exports = router;
