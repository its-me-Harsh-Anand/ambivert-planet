const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const authorizeAccessToken = require("./middlewares/authorizeAccessToken");
const genericErrorHandler = require("./middlewares/genericErrorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const { default: axios } = require("axios");
const getUserData = require("./middlewares/getUserData");

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
app.use(authorizeAccessToken)
app.use(genericErrorHandler)
app.use(getUserData)
//Import Route
// app.use("/user", require("./routes/user"));


// Setting Route
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + "/index.html"))
})

// Setting protected route
app.get('/api/protected', authorizeAccessToken, getUserData, (req, res)=>{
  // req.user is coming from getUserData middleware
  console.log(req.user)
  res.send(req.user)
})

app.get('/api/protected2', authorizeAccessToken, (req, res)=>{
  res.send("I am protected route and needs to be authorize first")
})

app.get('/api/unprotected', (req, res)=>{
  res.send("I am unprotected route")
})

// Not found handler should always be in the last
app.use(notFoundHandler)
module.exports = app;