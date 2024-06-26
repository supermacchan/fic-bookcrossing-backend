const app = require("./app");

require('dotenv').config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const uriDb = process.env.DB_HOST;

mongoose.set("strictQuery", true);

const connection = mongoose.connect(uriDb, {
  dbName: process.env.DB_NAME,
});

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });