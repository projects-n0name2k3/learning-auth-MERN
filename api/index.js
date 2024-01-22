import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Mongoose");
  })
  .catch((err) => console.log(err));

const app = express();

app.listen(3002, () => {
  console.log("Server listening on 3002");
});
