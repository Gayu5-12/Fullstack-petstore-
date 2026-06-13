const MedicineOrder = require("../models/MedicineOrder");

// CREATE MEDICINE ORDER
exports.createOrder = async (req, res) => {
  try {
    const order = await MedicineOrder.create(req.body);
    res.status(201).json({ success: true, order });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// GET USER MEDICINE ORDERS
exports.getOrders = async (req, res) => {
  try {
    const { email } = req.query;
    let filter = {};
    if (email) {
      filter.email = email;
    }
    const orders = await MedicineOrder.find(filter).populate("medicineId");
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
