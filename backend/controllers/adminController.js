const User = require("../models/User");
const Pet = require("../models/Pet");
const Adoption = require("../models/Adoption");
const SellPet = require("../models/Sell");
const ServiceAppointment = require("../models/ServiceAppointment");
const MedicineOrder = require("../models/MedicineOrder");

// ── existing ──────────────────────────────────────────
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -resetPasswordToken");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find().populate("petId");
    res.json(adoptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSellRequests = async (req, res) => {
  try {
    const sells = await SellPet.find();
    res.json(sells);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.json({ success: true, message: "Pet deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── new ───────────────────────────────────────────────

// GET /api/admin/dashboard
exports.getDashboard = async (req, res) => {
  try {
    const [users, pets, adoptions, sells] = await Promise.all([
      User.countDocuments(),
      Pet.countDocuments(),
      Adoption.countDocuments(),
      SellPet.countDocuments(),
    ]);
    const revenue = sells * 2500;
    res.json({ users, pets, adoptions, sells, revenue });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/admin/adoptions/:id  { status: "approved" | "rejected" }
exports.updateAdoption = async (req, res) => {
  try {
    const { status } = req.body;
    const adoption = await Adoption.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!adoption) return res.status(404).json({ message: "Adoption not found" });

    // sync pet adoptionStatus when approved
    if (adoption.petId) {
      await Pet.findByIdAndUpdate(adoption.petId, {
        adoptionStatus: status === "approved" ? "Adopted" : "Available",
      });
    }
    res.json({ success: true, adoption });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/admin/sells/:id  { status: "approved" | "rejected" }
exports.updateSell = async (req, res) => {
  try {
    const { status } = req.body;
    const sell = await SellPet.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!sell) return res.status(404).json({ message: "Sell request not found" });
    res.json({ success: true, sell });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/admin/pets/:id
exports.updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.json({ success: true, pet });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/admin/pets
exports.createPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json({ success: true, pet });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/admin/users/:id
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/admin/users/:id/block
exports.blockUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.isLoggedIn = false;
    // repurpose isLoggedIn as blocked flag — add blocked field if schema allows
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      { isLoggedIn: false },
      { new: true }
    ).select("-password");
    res.json({ success: true, user: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getServiceAppointments = async (req, res) => {
  try {
    const appointments = await ServiceAppointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateServiceAppointment = async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await ServiceAppointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });
    res.json({ success: true, appointment });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMedicineOrders = async (req, res) => {
  try {
    const orders = await MedicineOrder.find().populate("medicineId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateMedicineOrder = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await MedicineOrder.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

