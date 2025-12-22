const mongoose = require("mongoose");

const connectDatabase = async () => {
  console.log("DB_URL =", process.env.DB_URL); // 👈 ADD THIS

  await mongoose.connect(process.env.DB_URL);
  console.log("MongoDB connected");
};

module.exports = connectDatabase;
