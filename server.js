const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoute"); // Correctly require the router module

const cookieParser = require("cookie-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/userProfile", userRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
