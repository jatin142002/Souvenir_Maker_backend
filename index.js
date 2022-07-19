import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

mongoose
  .connect("mongodb://localhost:27017/SovenirV1DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(5000, function (req, res) {
      console.log("Server started at port 5000");
    })
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
