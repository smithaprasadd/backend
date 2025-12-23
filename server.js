const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

mongoose.connect(process.env.DB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
