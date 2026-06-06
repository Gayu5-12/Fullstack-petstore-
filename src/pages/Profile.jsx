import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "Valued Guest", email: "" });
  
  // Dynamic metrics state hooks
  const [cartItems, setCartItems] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [adoptedPets, setAdoptedPets] = useState([]);

  useEffect(() => {
    // 1. Retrieve registered user profile configurations
    const savedUserRaw = localStorage.getItem("registeredUser");
    if (savedUserRaw) {
      try {
        const savedUser = JSON.parse(savedUserRaw);
        if (savedUser && savedUser.name) {
          setUser({
            name: savedUser.name,
            email: savedUser.email || "",
          });
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
      }
    }

    // 2. Hydrate Cart Metrics from state storage
    const savedCart = localStorage.getItem("cartItems") || localStorage.getItem("cart");
    if (savedCart) {
      try { setCartItems(JSON.parse(savedCart)); } catch (e) { console.error(e); }
    }

    // 3. Hydrate Booked Service Appointments
    const savedAppointments = localStorage.getItem("appointments") || localStorage.getItem("bookedServices");
    if (savedAppointments) {
      try { setAppointments(JSON.parse(savedAppointments)); } catch (e) { console.error(e); }
    }

    // 4. Hydrate Finalized Pet Adoptions
    const savedAdoptions = localStorage.getItem("adoptedPets") || localStorage.getItem("adoptions");
    if (savedAdoptions) {
      try { setAdoptedPets(JSON.parse(savedAdoptions)); } catch (e) { console.error(e); }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isAdmin");
    alert("👋 Logging out... Redirecting to home.");
    navigate("/");
  };

  return (
    <div className="db-page">
      {/* ====== LEFT PANEL: PROFILE SUMMARY CARD ====== */}
      <aside className="db-sidebar">
        <div className="db-card user-summary-card">
          <div className="db-avatar-wrapper">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              alt="Profile Avatar" 
              className="db-avatar"
            />
          </div>

          <h3 className="db-title">Welcome back, {user.name}!</h3>
          
          <div className="db-badge-container">
            <span className="db-badge">Client Account Verified</span>
          </div>

          <p className="db-subtitle">
            Secure tracking log interface system.
            {user.email && <span className="db-email-display">{user.email}</span>}
          </p>

          <div className="db-actions">
            <button onClick={() => navigate("/")} className="db-link-home">
              🏠 Back to Homepage
            </button>
            <button onClick={handleLogout} className="db-btn-logout">
              🚪 Logout Account
            </button>
          </div>
        </div>
      </aside>

      {/* ====== RIGHT PANEL: ACTIVITY DATA ECOSYSTEM ====== */}
      <main className="db-content-grid">
        
        {/* SECTION 1: ADOPTED PETS MATRIX */}
        <section className="db-panel">
          <div className="db-panel__header">
            <h2 className="db-panel__title">🐾 My Adopted Family</h2>
            <span className="db-panel__count">{adoptedPets.length}</span>
          </div>
          {adoptedPets.length > 0 ? (
            <div className="db-list">
              {adoptedPets.map((pet, idx) => (
                <div key={pet.id || idx} className="db-item-card text-card">
                  <div className="db-item-meta">
                    <span className="db-item-icon">🐾</span>
                    <div>
                      <h4 className="db-item-name">{pet.name}</h4>
                      <p className="db-item-sub">{pet.breed || pet.type || "Companion Pet"}</p>
                    </div>
                  </div>
                  <span className="status-pill status-success">Passed Verification</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="db-empty-placeholder">
              <p>No adopted companion records found yet.</p>
              <button onClick={() => navigate("/adopt")} className="db-panel-action-btn">Browse Adoption Gallery</button>
            </div>
          )}
        </section>

        {/* SECTION 2: SERVICE APPOINTMENT LOGS */}
        <section className="db-panel">
          <div className="db-panel__header">
            <h2 className="db-panel__title">🗓️ Booked Appointments</h2>
            <span className="db-panel__count">{appointments.length}</span>
          </div>
          {appointments.length > 0 ? (
            <div className="db-list">
              {appointments.map((appt, idx) => (
                <div key={appt.id || idx} className="db-item-card text-card">
                  <div className="db-item-meta">
                    <span className="db-item-icon">🩺</span>
                    <div>
                      <h4 className="db-item-name">{appt.serviceName || appt.service || "Pet Wellness Care"}</h4>
                      <p className="db-item-sub">📅 {appt.date} • 🕒 {appt.time || "Scheduled Time"}</p>
                    </div>
                  </div>
                  <span className="status-pill status-pending">Confirmed</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="db-empty-placeholder">
              <p>No active service bookings scheduled.</p>
              <button onClick={() => navigate("/petcare")} className="db-panel-action-btn">Book Vet & Grooming</button>
            </div>
          )}
        </section>

        {/* SECTION 3: INLINE ACCESSORY & MEDICINE CART ITEMS */}
        <section className="db-panel">
          <div className="db-panel__header">
            <h2 className="db-panel__title">🛒 Items In Shopping Cart</h2>
            <span className="db-panel__count">{cartItems.length}</span>
          </div>
          {cartItems.length > 0 ? (
            <div className="db-list">
              {cartItems.map((item, idx) => (
                <div key={item.id || idx} className="db-item-card text-card">
                  <div className="db-item-meta">
                    <span className="db-item-icon">📦</span>
                    <div>
                      <h4 className="db-item-name">{item.name}</h4>
                      <p className="db-item-sub">{item.category || "Pet Accessory"} • {item.quantity || 1}x</p>
                    </div>
                  </div>
                  <span className="db-item-price">{item.price || "In-store Pick"}</span>
                </div>
              ))}
              <button onClick={() => navigate("/cart")} className="db-checkout-shortcut">
                Proceed to Checkout Summary →
              </button>
            </div>
          ) : (
            <div className="db-empty-placeholder">
              <p>Your shopping cart workspace is currently empty.</p>
              <button onClick={() => navigate("/medicine")} className="db-panel-action-btn">Visit Pharmacy Shop</button>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}