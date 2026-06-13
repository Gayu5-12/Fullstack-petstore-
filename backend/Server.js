const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { getEnv } = require("./config/env");
const { connectDB } = require("./config/db");

const authRoutes = require("./routers/authRoutes");
const productRoutes = require("./routers/productRoutes");
const petRoutes = require("./routers/petRoutes");
const adminRoutes = require("./routers/adminRoutes");
const adoptionRoutes = require("./routers/adoptionRoutes");
const sellRoutes = require("./routers/sellRoutes");
const accessoryRoutes = require("./routers/accessoryRoutes");
const medicineRoutes = require("./routers/medicineRoutes");
const serviceAppointmentRoutes = require("./routers/serviceAppointmentRoutes");
const medicineOrderRoutes = require("./routers/medicineOrderRoutes");

const app = express();

const { port, mongoUri } = getEnv();

// ======================
// CORS
// ======================
const allowedOrigins = [
  "http://localhost:3000",
  "https://pet-frontend1.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked Origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.options("*", cors());

// ======================
// Middleware
// ======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================
// Debug Middleware
// ======================
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// ======================
// Health Routes
// ======================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Pet Paws API Running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "ok",
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend working",
  });
});

// ======================
// API Routes
// ======================
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
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/adoptions", adoptionRoutes);
app.use("/api/sells", sellRoutes);
app.use("/api/accessories", accessoryRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/service-appointments", serviceAppointmentRoutes);
app.use("/api/medicines/orders", medicineOrderRoutes);

// ======================
// 404
// ======================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ======================
// Error Handler
// ======================
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:");
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ======================
// Start Server
// ======================
async function startServer() {
  try {
    await connectDB(mongoUri);
    console.log("MongoDB Connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
}

startServer();

