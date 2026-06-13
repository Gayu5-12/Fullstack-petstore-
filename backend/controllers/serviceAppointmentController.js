const ServiceAppointment = require("../models/ServiceAppointment");

// CREATE APPOINTMENT
exports.createAppointment = async (req, res) => {
  try {
    const appointment = await ServiceAppointment.create(req.body);
    res.status(201).json({ success: true, appointment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// GET USER APPOINTMENTS
exports.getAppointments = async (req, res) => {
  try {
    const { email, clientName } = req.query;
    let filter = {};
    if (email && clientName) {
      filter = { $or: [{ contact: email }, { clientName: clientName }] };
    } else if (email) {
      filter = { contact: email };
    } else if (clientName) {
      filter = { clientName };
    }
    const appointments = await ServiceAppointment.find(filter);
    res.status(200).json({ success: true, appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
