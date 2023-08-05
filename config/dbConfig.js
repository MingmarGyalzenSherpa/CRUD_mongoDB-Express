const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  DB_USER_NAME: process.env.USER_NAME,
  DB_PASSWORD: process.env.PASSWORD,
  DB_URL: process.env.URL,
  DB_NAME: process.env.DB_NAME,
};
