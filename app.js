require("dotenv").config();
const express = require("express");
// const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

// const { userRouter } = require("./routes/user-routes");

const app = express();

app.use(cors());
app.use(express.json()); // handle requests that have Content-Type: application/json
app.use(express.urlencoded({ extended: true })); // handles parsing of forms

// localhost:3001/a.txt
// app.use(express.static(path.join(__dirname, "static")));

// ROUTERS
// app.use("/user", userRouter);

mongoose.set("strictQuery", true);
mongoose.connection.on("error", (err) => console.error(err));
mongoose.connection.once("open", () => console.log("Connected to MongoDB"));
mongoose.connect(process.env.MONGO_URI);

const PORT =
  process.env.MODE === "production"
    ? process.env.PROD_PORT
    : process.env.DEV_PORT;

app.listen(PORT, () => {
  console.log(`Server in ${process.env.MODE} mode, listening on port: ${PORT}`);
});
