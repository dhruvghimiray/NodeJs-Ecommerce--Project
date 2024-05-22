const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/EcommerceProject")
  .then(() => {
    console.log("connected to Mongodb Server");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
