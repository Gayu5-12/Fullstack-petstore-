import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";
import api from "../api/axios";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "Valued Guest", email: "", joinedDate: "June 2026" });
  const isAdmin =
  localStorage.getItem("isAdmin") === "true";
  // Dynamic metrics state hooks
  const [appointments, setAppointments] = useState([]);
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [medicineOrders, setMedicineOrders] = useState([]);

  useEffect(() => {
    // 🔐 1. Route Guard: Boot out unauthenticated access attempts
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (!isLoggedIn) {
      alert("🔒 Access Denied. Please log in to view your dashboard workspace.");
      navigate("/login");
      return;
    }

    // 2. Retrieve registered user profile configurations matching Login payload
    const savedUserRaw = localStorage.getItem("registeredUser");
    if (savedUserRaw) {
      try {
        const savedUser = JSON.parse(savedUserRaw);
        if (savedUser && savedUser.name) {
          setUser({
            name: savedUser.name,
            email: savedUser.email || "",
            joinedDate: savedUser.joinedDate || "June 2026"
          });
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
      }
    }

    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      // Fetch user's service appointments
      api.get(`/service-appointments?email=${userEmail}`)
        .then(({ data }) => {
          const list = data.appointments || data;
          if (Array.isArray(list)) setAppointments(list);
        })
        .catch(console.error);

      // Fetch user's adopted pets (approved adoptions)
      api.get("/adoptions")
        .then(({ data }) => {
          const list = data.adoptions || data;
          if (Array.isArray(list)) {
            const userAdopted = list.filter(a => a.email === userEmail && a.status === "approved").map(a => ({
              id: a._id,
              name: a.petId?.name || "Companion Pet",
              breed: a.petId?.breed || "Companion"
            }));
            setAdoptedPets(userAdopted);
          }
        })
        .catch(console.error);

      // Fetch user's medicine orders
      api.get(`/medicines/orders?email=${userEmail}`)
        .then(({ data }) => {
          const list = data.orders || data;
          if (Array.isArray(list)) setMedicineOrders(list);
        })
        .catch(console.error);
    }
  }, [navigate]);

  // 🧹 Thorough Session Cleansing Routines
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("registeredUser");
    //localStorage.removeItem("token");
    
    alert("👋 Logging out... Redirecting to home window.");
    navigate("/");
  };

  return (
    <div className="db-page">
      {/* =======================================================
          ====== LEFT PANEL: SIDEBAR USER ACCOUNT OVERVIEW ======
          ======================================================= */}
      <aside className="db-sidebar">
        <div className="user-summary-card">
          <div className="db-avatar-wrapper">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              alt="Profile Avatar" 
              className="db-avatar"
            />
            <div className="db-status-indicator"></div>
          </div>

          <h3 className="user-name-display">{user.name}</h3>
          <p className="user-email-display">{user.email || "No email synchronized"}</p>
          
          <div style={{ textAlign: "center" }}>
            <span className="member-badge">🐾 Pet Parent Verified</span>
          </div>

          <div className="db-sidebar-divider"></div>

          {/* Account Metric Data Rows */}
          <div className="info-item">
            <span>📅 Account Opened</span>
            <span>{user.joinedDate}</span>
          </div>
          <div className="info-item">
            <span>🛡️ Status Layer</span>
            <span className="badge badge-success">Active Secure</span>
          </div>
          {localStorage.getItem("isAdmin") === "true" && (
  <button
    onClick={() => navigate("/admin")}
    className="db-btn db-btn-secondary"
  >
    🛠 Admin Dashboard
  </button>
)}

          const isAdmin =
  localStorage.getItem("isAdmin") === "true";
        </div>
      </aside>

      {/* =========================================================
          ====== RIGHT PANEL: VERTICAL ECOSYSTEM WORKSPACE ======
          ========================================================= */}
      <main className="db-content-grid" style={{ gridTemplateColumns: "1fr" }}>
        
        {/* TOP COMPONENT LAYER: RAPID SUMMARY STATS GRID */}
        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-icon">🐾</span>
            <div className="stat-number">{adoptedPets.length}</div>
            <div className="stat-label">Pets Adopted</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🗓️</span>
            <div className="stat-number">{appointments.length}</div>
            <div className="stat-label">Bookings Pending</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">💊</span>
            <div className="stat-number">{medicineOrders.length}</div>
            <div className="stat-label">Medicine Orders</div>
          </div>
        </div>

        {/* SECTION 1 DOWN: ADOPTED PETS MATRIX */}
        <section className="db-content-card">
          <h2 className="db-section-title">
            <i>🐾</i> My Adopted Family
          </h2>
          
          {adoptedPets.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {adoptedPets.map((pet, idx) => (
                <div key={pet.id || idx} className="activity-row" style={{ padding: "12px 14px", display: "flex", justifyContent: "between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                    <span style={{ fontSize: "20px" }}>🐕</span>
                    <div>
                      <h4 style={{ margin: "0 0 2px", fontSize: "0.95rem", fontWeight: 700 }}>{pet.name}</h4>
                      <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-light)" }}>{pet.breed || pet.type || "Companion Pet"}</p>
                    </div>
                  </div>
                  <span className="badge badge-success">Passed Verification</span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p>No adopted companion records found yet inside your portfolio tree setup.</p>
              <button onClick={() => navigate("/adopt")}>Browse Adoption Gallery →</button>
            </div>
          )}
        </section>

        {/* SECTION 2 DOWN: SERVICE APPOINTMENT LOGS */}
        <section className="db-content-card">
          <h2 className="db-section-title">
            <i>🗓️</i> Booked Service Appointments
          </h2>
          
          {appointments.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {appointments.map((appt, idx) => (
                <div key={appt.id || idx} className="activity-row" style={{ padding: "12px 14px", display: "flex", justifyContent: "between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                    <span style={{ fontSize: "20px" }}>🩺</span>
                    <div>
                      <h4 style={{ margin: "0 0 2px", fontSize: "0.95rem", fontWeight: 700 }}>{appt.serviceName || appt.service || "Pet Wellness Care"}</h4>
                      <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-light)" }}>📅 {appt.date} • 🕒 {appt.time || "Scheduled Time"}</p>
                    </div>
                  </div>
                  <span className="badge badge-info">Confirmed</span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p>No active diagnostic service bookings or custom vet treatments found scheduled.</p>
              <button onClick={() => navigate("/petcare")}>Book Vet & Grooming →</button>
            </div>
          )}
        </section>

        {/* SECTION 3 DOWN: MEDICINE ORDERS FROM MONGODB */}
        <section className="db-content-card">
          <h2 className="db-section-title">
            <i>💊</i> My Medicine Reservations
          </h2>
          
          {medicineOrders.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {medicineOrders.map((item, idx) => (
                <div key={item._id || idx} className="order-row" style={{ padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                    <span style={{ fontSize: "20px" }}>💊</span>
                    <div>
                      <h4 style={{ margin: "0 0 2px", fontSize: "0.95rem", fontWeight: 700 }}>{item.medicineName}</h4>
                      <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-light)" }}>Quantity: {item.quantity || 1}x</p>
                    </div>
                  </div>
                  <span className={`badge ${item.status === 'approved' ? 'badge-success' : 'badge-info'}`}>
                    {item.status || "pending"}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p>Your medicine reservation history is currently empty.</p>
              <button onClick={() => navigate("/medicine")}>Visit Pharmacy Shop →</button>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}