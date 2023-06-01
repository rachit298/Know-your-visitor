//I have to link express package using below method
const express = require("express");

//Express is used for using Node in more better and optimize way
const app = express();

//connect Mongodb with Node
//I have already installed mongoose and
//now here I have to link mongoose package using below method
const mongoose = require("mongoose");

//dotenv is used for security concerns that's why
//data is being fetched from ".env" file
const dotenv = require("dotenv");
dotenv.config();

//use "cors" package for avoiding cors error
const cors = require("cors");
app.use(cors());

//importing "router" from "userRoute"
const userRoute = require("./routes/userRoute");

//whatever data is coming, will convert in json format in backend
app.use(express.json());

//I have specified which DB I want to link through "URI"
mongoose
  .connect(process.env.URI)
  //if connection is successful then ".then()" will be called
  //otherwise "catch()" will be called
  .then(() => {
    console.log("connected successfully");

    //always listening/running to given port number
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);

      console.log("successfully running at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });

app.use(userRoute);
