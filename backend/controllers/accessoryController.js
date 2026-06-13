const PetAccessory = require("../models/PetAccessory");

// GET ALL ACCESSORIES
exports.getAllAccessories = async (req, res) => {
  try {
    const accessories = await PetAccessory.find();
    res.json({ success: true, count: accessories.length, data: accessories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE ACCESSORY
exports.getAccessoryById = async (req, res) => {
  try {
    const accessory = await PetAccessory.findById(req.params.id);
    if (!accessory) return res.status(404).json({ success: false, message: "Accessory not found" });
    res.json({ success: true, data: accessory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// CREATE ACCESSORY
exports.createAccessory = async (req, res) => {
  try {
    const accessory = await PetAccessory.create(req.body);
    res.status(201).json({ success: true, data: accessory });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// UPDATE ACCESSORY
exports.updateAccessory = async (req, res) => {
  try {
    const accessory = await PetAccessory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!accessory) return res.status(404).json({ success: false, message: "Accessory not found" });
    res.json({ success: true, data: accessory });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE ACCESSORY
exports.deleteAccessory = async (req, res) => {
  try {
    const accessory = await PetAccessory.findByIdAndDelete(req.params.id);
    if (!accessory) return res.status(404).json({ success: false, message: "Accessory not found" });
    res.json({ success: true, message: "Accessory deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
