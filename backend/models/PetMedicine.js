const mongoose = require("mongoose");

const petMedicineSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true, trim: true },
    category:    { type: String, required: true },
    description: { type: String },
    usage:       { type: String },
    dosage:      { type: String },
    icon:        { type: String },
    tags:        [String],
    stock: {
      type: String,
      enum: ["In Stock", "Low Stock", "Out of Stock"],
      default: "In Stock",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PetMedicine", petMedicineSchema, "petmedicines");
