const mongoose = require("mongoose");

const serviceAppointmentSchema = new mongoose.Schema(
  {
    petName:    { type: String, required: true },
    petType:    { type: String, required: true },
    clientName: { type: String, required: true },
    contact:    { type: String, required: true },
    date:       { type: String, required: true },
    time:       { type: String, required: true },
    branch:     { type: String, required: true },
    service:    { type: String, required: true },
    status:     { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ServiceAppointment", serviceAppointmentSchema, "serviceappointments");
