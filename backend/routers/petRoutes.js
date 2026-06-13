const express = require("express");
const router = express.Router();

// TEST ROUTE (VERY IMPORTANT)
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Pets route working",
  });
});

module.exports = router;