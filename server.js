const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoute"); // Correctly require the router module
const ownerRoutes = require("./routes/ownerRoutes.js")
const productRoutes = require("./routes/productsRoutes.js")

const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./config/mongooseConnection.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/users", userRoutes);
app.use("/owners", ownerRoutes);
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
