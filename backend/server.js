require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dbUrl = require("./config/configDb");
const ProductModel = require("./model/productModel");
const fakeDB = require("./fakeDB.json");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(dbUrl)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));

app.use("/", require("./routes"));

app.get("/", (req, res) => {
    res.send("Welcome to backend server")
})

app.listen(4000, () => {
    console.log("Server running...");
});


// CategoryModel.insertMany(fakeCategories)
// .then(res => console.log('Data inserted'))

// ProductModel.insertMany(fakeDB)
// .then(res => console.log('Data inserted'))
// .catch(err => console.log(err))
