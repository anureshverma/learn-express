import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 56000;

import personRouter from "./person/person.route.js";

mongoose
  .connect("mongodb://localhost:27017/learndb")
  .then(() => console.log("Connected to MongoDb ...."))
  .catch((error) => console.log("Failed to connect to MongoDb"));

app.use(express.json());
app.use("/pesron", personRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
