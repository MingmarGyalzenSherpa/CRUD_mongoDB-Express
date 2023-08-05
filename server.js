const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const appConfig = require("./config/appConfig");
const dbConfig = require("./config/dbConfig");
const crudRoute = require("./routes/crud.routes");
//db
const { connect } = require("./config/dbConnect");
//init
const app = express();
let db;
connect().then((dbConnection) => (db = dbConnection));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/crud", (req, res, next) => {
  req.db = db;
  next();
});

// routes
app.use("/crud", crudRoute);

const init = async (req, res) => {
  console.log("Server started successfully!!");
};

app.listen(appConfig.PORT, init);
