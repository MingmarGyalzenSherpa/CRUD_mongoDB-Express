const { ObjectId } = require("mongodb");

const getAllStudent = async (req, res) => {
  const db = req.db;
  const cursor = db.collection("students").find();
  const result = await cursor.toArray();
  res.status(200).json(result);
};

const insertStudent = async (req, res) => {
  const db = req.db;
  const { name, age, grade, address } = req.body;
  try {
    db.collection("students").insertOne({ name, age, grade, address });
    res.status(200).json({ message: "Successfully added!!" });
  } catch (error) {
    res.status(400).json({ message: "Failed to insert student" });
  }
};

const deleteStudent = async (req, res) => {
  const db = req.db;
  const { name, grade } = req.body;

  try {
    db.collection("students").deleteOne({ name, grade });
    res.status(200).json({ message: "Successfully Deleted" });
  } catch (err) {
    res.status(400).json({ message: "Deletion failed!!" });
  }
};

const updateStudent = async (req, res) => {
  const db = req.db;
  const { id, name, age } = req.body;
  console.log(new ObjectId(id));
  try {
    db.collection("students").updateOne(
      { _id: new ObjectId(id) },
      { $set: { name: name, age: age } }
    );

    res.status(200).json({ message: "Student successfully updated!!" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = {
  getAllStudent,
  insertStudent,
  deleteStudent,
  updateStudent,
};
