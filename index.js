import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import userDataRoute from "./Routes/UserRoutes.js";
mongoose.set("strictQuery", true);
const app = express();
app.use(bodyParser.json());
app.use(express.json());
dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongodb");
    } catch (error) {
      throw error;
    }
  };
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
  });

  app.use(cors());
  app.use("/api/v1/user/", userDataRoute);
  app.listen(8000, () => {
    connect();
    console.log("Connected to backend");
  });