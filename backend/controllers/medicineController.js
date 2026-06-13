const PetMedicine = require("../models/PetMedicine");

// GET ALL MEDICINES
exports.getAllMedicines = async (req, res) => {
  try {
    const medicines = await PetMedicine.find();
    res.json({ success: true, count: medicines.length, data: medicines });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE MEDICINE
exports.getMedicineById = async (req, res) => {
  try {
    const medicine = await PetMedicine.findById(req.params.id);
    if (!medicine) return res.status(404).json({ success: false, message: "Medicine not found" });
    res.json({ success: true, data: medicine });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// CREATE MEDICINE
exports.createMedicine = async (req, res) => {
  try {
    const medicine = await PetMedicine.create(req.body);
    res.status(201).json({ success: true, data: medicine });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// UPDATE MEDICINE
exports.updateMedicine = async (req, res) => {
  try {
    const medicine = await PetMedicine.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!medicine) return res.status(404).json({ success: false, message: "Medicine not found" });
    res.json({ success: true, data: medicine });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE MEDICINE
exports.deleteMedicine = async (req, res) => {
  try {
    const medicine = await PetMedicine.findByIdAndDelete(req.params.id);
    if (!medicine) return res.status(404).json({ success: false, message: "Medicine not found" });
    res.json({ success: true, message: "Medicine deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
