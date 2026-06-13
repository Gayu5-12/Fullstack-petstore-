const mongoose = require("mongoose");

const petAccessorySchema = new mongoose.Schema(
  {
    name:     { type: String, required: true, trim: true },
    category: { type: String, required: true },
    price:    { type: Number, required: true },
    image:    { type: String },
    petType:  { type: String, default: "all" },
    tag:      { type: String },
    stock:    { type: Number, default: 0 },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PetAccessory", petAccessorySchema, "petaccessories");
