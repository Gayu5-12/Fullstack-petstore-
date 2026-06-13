const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");

const {
  getDashboard,
  getUsers,
  getPets,
  getAdoptions,
  getSellRequests,
  createPet,
  updatePet,
  deletePet,
  updateAdoption,
  updateSell,
  deleteUser,
  blockUser,
  getServiceAppointments,
  updateServiceAppointment,
  getMedicineOrders,
  updateMedicineOrder,
} = require("../controllers/adminController");

// all admin routes require auth + admin role
router.use(protect, adminOnly);

router.get("/dashboard", getDashboard);

router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id/block", blockUser);

router.get("/pets", getPets);
router.post("/pets", createPet);
router.put("/pets/:id", updatePet);
router.delete("/pets/:id", deletePet);

router.get("/adoptions", getAdoptions);
router.put("/adoptions/:id", updateAdoption);

router.get("/sells", getSellRequests);
router.put("/sells/:id", updateSell);

router.get("/service-appointments", getServiceAppointments);
router.put("/service-appointments/:id", updateServiceAppointment);

router.get("/medicine-orders", getMedicineOrders);
router.put("/medicine-orders/:id", updateMedicineOrder);

module.exports = router;
