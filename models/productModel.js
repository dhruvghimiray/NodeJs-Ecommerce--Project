const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/EcommerceProject");

const productSchema  = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgColor: String,
  panelColor: String,
  textColor: String,
});

module.exports = mongoose.model("product", productSchema);
