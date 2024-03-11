require("dotenv").config();
const express = require("express");
const app = express();
const apiRoutes = require("./routes/api");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path); // e.g. 'GET /register'
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// routes
app.use("/register", apiRoutes);

// connect to DB and only if connection was sucessful then listen for requests
mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to DB & Listening on http://localhost:${PORT} ...`);
    });
  })
  .catch((error) => {
    console.log('Error, could not connect to DB');
    console.log(error);
  })
