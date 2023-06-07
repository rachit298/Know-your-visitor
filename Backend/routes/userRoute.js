//I have to link express package using below method
const express = require("express");

//specifying which model I want to use
const User = require("../models/userModel");

//using inbuilt express router
const router = express.Router();

//create operation
//I am inserting data into DB that's why ".post" is used
router.post("/", async (req, res) => {
  //grabbing data which user has entered in frontend
  const { name, age, email } = req.body;

  //try catch is used to handle errors
  try {
    //feeding data into DB using model
    //keys are Schema variable and values are frontend vaiables
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    //any error will be caught here
    res.status(400).json({ error: error.message });
  }
});

//read/get operation
//This is an API which shows whatever is inside "res.send()"
router.get("/", async (req, res) => {
  //try catch is used to handle errors
  try {
    //get data from DB using model
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    //any error will be caught here
    res.status(500).json({ error: error.message });
  }
});

//read/get single user
router.get("/:id", async (req, res) => {
  //for finding out data or in this case id from URL
  const { id } = req.params;

  //try catch is used to handle errors
  try {
    //get data from DB using model
    const singleUser = await User.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    //any error will be caught here
    res.status(500).json({ error: error.message });
  }
});

//delete operation
router.delete("/:id", async (req, res) => {
  //for finding out data or in this case id from URL
  const { id } = req.params;

  //try catch is used to handle errors
  try {
    //get data from DB using model
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
    //any error will be caught here
    res.status(500).json({ error: error.message });
  }
});

//update/put/patch operation
router.patch("/:id", async (req, res) => {
  //takes data from frontend
  const { id } = req.params;
  const { name, type, email } = req.body;

  //try catch is used to handle errors
  try {
    //get updated data from DB using model
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(202).json(updateUser);
  } catch (error) {
    console.log(error);
    //any error will be caught here
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
