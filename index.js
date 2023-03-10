const express = require("express");
const app = express();
const port = process.env.PORT || 7020;
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();
const cors = require("cors");
const notFound = require("./middleware/notFound");

const teamRouter = require("./routes/teamRouter");

app.use(cors());
app.use(express());

app.use(teamRouter);

// error route
app.use(notFound);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGOTEE);
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
