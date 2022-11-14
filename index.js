import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes/tourRoutes.js";
const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

app.use("/api/v1/9ja-tours", router)
const PORT = process.env.PORT || 5000
const URI = process.env.CONNECTION_STRING

app.get('/', (req, res) => {
    res.send("welcome to tours")
})
app.listen(PORT, console.log(`app is running on port ${PORT}`))

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo DB connection successfull");
  })
  .catch((err) => {
    console.log("an error occured: ", err.message);
  });