const express = require("express");
const router = express.Router();
const {
  getAllAccessories,
  getAccessoryById,
  createAccessory,
  updateAccessory,
  deleteAccessory,
} = require("../controllers/accessoryController");

// Access control could be added here if needed, keeping it public/open based on requirements
router.get("/", getAllAccessories);
router.get("/:id", getAccessoryById);
router.post("/", createAccessory);
router.put("/:id", updateAccessory);
router.delete("/:id", deleteAccessory);

module.exports = router;
