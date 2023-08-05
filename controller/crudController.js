const getAllStudent = async (req, res) => {
  const db = req.db;
  const cursor = db.collection("student").find();
  const result = await cursor.toArray();
  res.status(200).json(result);
};

module.exports = {
  getAllStudent,
};
