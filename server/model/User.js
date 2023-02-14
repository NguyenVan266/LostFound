const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  institule: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  CCCD: { type: String },
  role: {
    type: String,
    enum: [
      1, // admin
      2, // receivers
      3, // colleter
    ],
    default: "user",
  },
  fback:[{
    name: String,
    email: String,
    phone: String,
    fback: String,
  }]
}
);

module.exports = mongoose.model("User", UserSchema);
