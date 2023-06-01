const mongoose = require("mongoose");

//create Schema(a schema defines the document's properties,
//default values, types of data, validators, etc.)
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

//create Model(a model is a wrapper of the Mongoose schema)
//model provides an interface for the database to create,
//query, update, delete records, and so on.
const User = mongoose.model("User", userSchema);
module.exports = User;
