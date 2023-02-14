const express = require("express");
const dotenv = require("dotenv");

const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const appRoute = require("./router/index");
const cors = require("cors");
dotenv.config();
const corsOptions = {
  //To allow requests from client
  origin: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ],
  credentialsx: true,
  exposedHeaders: ["set-cookie"],
};



app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", appRoute);


mongoose.connect(process.env.MONGDB_URL, () => {
  console.log("connect to mongoose db");
});

app.listen(3002, () => {
  console.log("Express app listening on port 3002");
});
