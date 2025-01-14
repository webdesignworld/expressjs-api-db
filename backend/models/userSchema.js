const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  role: { type: String, enum: ["Coder", "Manager"], required: true },
  description: { type: String }, // only pertinent to coders
  score: { type: Number, default: 0 }, // only pertinent to coders 
});

module.exports = mongoose.model("User", UserSchema);
