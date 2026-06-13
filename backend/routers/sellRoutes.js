const express = require("express");
const router = express.Router();
const SellPet = require("../models/Sell");

router.post("/", async (req, res) => {
  try {
    const sell = await SellPet.create(req.body);
    res.status(201).json(sell);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const sells = await SellPet.find();
    res.json(sells);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/sells/:id  { status }
router.put("/:id", async (req, res) => {
  try {
    const sell = await SellPet.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!sell) return res.status(404).json({ message: "Not found" });
    res.json(sell);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
