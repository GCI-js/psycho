import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/psycho");

const db = mongoose.connection;

db.on("error", function () {
  console.log("DB Connection Failed!");
});

db.once("open", function () {
  console.log("DB Connected!");
});
