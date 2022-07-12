const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path")

const app = express();

// Connecting to MongoDB
mongoose.connect(process.env.ATLAS_URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log(`Mongodb connected...`);
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static',express.static('static'))


//Import Route
// app.use("/user", require("./routes/user"));


// Setting Route
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + "/index.html"))
})

module.exports = app;