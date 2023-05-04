const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dbUrl = require("./config/configDb")

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(dbUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use("/", require("./routes"));

app.listen(4000, () => {
  console.log("Server running...");
});
