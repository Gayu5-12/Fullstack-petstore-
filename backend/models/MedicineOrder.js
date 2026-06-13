const mongoose = require("mongoose");

const medicineOrderSchema = new mongoose.Schema(
  {
    medicineId:   { type: mongoose.Schema.Types.ObjectId, ref: "PetMedicine", required: true },
    medicineName: { type: String, required: true },
    userName:     { type: String, required: true },
    email:        { type: String, required: true },
    phone:        { type: String, required: true },
    quantity:     { type: Number, default: 1 },
    status:       { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MedicineOrder", medicineOrderSchema, "medicineorders");
