import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../styles/Adopt.css";

const PETS = [
  { id: 1, name: "Biscuit", type: "dog", breed: "Golden Retriever", color: "Golden Golden", native: "Chennai, TN", age: "2 years", price: 18000, img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80", lifespan: "10-12 years", ownerName: "Arun Kumar", ownerEmail: "arun.k@email.com" },
  { id: 2, name: "Milo", type: "dog", breed: "Pug", color: "Fawn Cream", native: "Coimbatore, TN", age: "1 year", price: 12000, img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&q=80", lifespan: "12-15 years", ownerName: "Deepa Raj", ownerEmail: "deepa.r@email.com" },
  { id: 3, name: "Bruno", type: "dog", breed: "German Shepherd", color: "Black & Tan", native: "Madurai, TN", age: "3 years", price: 22000, img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&q=80", lifespan: "9-13 years", ownerName: "Senthil Nathan", ownerEmail: "senthil.n@email.com" },
  { id: 4, name: "Coco", type: "dog", breed: "Beagle", color: "Tricolor Patch", native: "Trichy, TN", age: "1.5 years", price: 16500, img: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600&q=80", lifespan: "12-15 years", ownerName: "Meera Krishnan", ownerEmail: "meera.k@email.com" },
  { id: 5, name: "Whiskers", type: "cat", breed: "Persian", color: "Pure White", native: "Salem, TN", age: "3 years", price: 9500, img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80", lifespan: "12-17 years", ownerName: "Prakash Rajan", ownerEmail: "prakash.r@email.com" },
  { id: 6, name: "Luna", type: "cat", breed: "Siamese", color: "Cream Pointed", native: "Tirunelveli, TN", age: "6 months", price: 7200, img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&q=80", lifespan: "15-20 years", ownerName: "Ananya Swamy", ownerEmail: "ananya.s@email.com" },
  { id: 7, name: "Shadow", type: "cat", breed: "British Shorthair", color: "Blue Grey", native: "Vellore, TN", age: "2 years", price: 11000, img: "https://images.unsplash.com/photo-1574158622643-69d34d72650f?w=600&q=80", lifespan: "12-16 years", ownerName: "Karthik Raja", ownerEmail: "karthik.r@email.com" },
  { id: 8, name: "Mochi", type: "cat", breed: "Scottish Fold", color: "Grey Tabby", native: "Erode, TN", age: "1 year", price: 15000, img: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&q=80", lifespan: "11-15 years", ownerName: "Divya Bharathi", ownerEmail: "divya.b@email.com" },
  { id: 9, name: "Oliver", type: "bird", breed: "African Grey", color: "Grey & Red", native: "Chennai, TN", age: "1 year", price: 25000, img: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=600&q=80", lifespan: "40-60 years", ownerName: "Ramachandran", ownerEmail: "ram.c@email.com" },
  { id: 10, name: "Sky", type: "bird", breed: "Budgerigar", color: "Sky Blue", native: "Madurai, TN", age: "6 months", price: 1200, img: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?w=600&q=80", lifespan: "5-8 years", ownerName: "Suresh Mani", ownerEmail: "suresh.m@email.com" },
  { id: 11, name: "Sunny", type: "bird", breed: "Cockatiel", color: "Pastel Yellow", native: "Coimbatore, TN", age: "8 months", price: 2800, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", lifespan: "10-14 years", ownerName: "Venkatesh Prasad", ownerEmail: "venkat.p@email.com" },
  { id: 12, name: "Rio", type: "bird", breed: "Macaw", color: "Blue & Gold", native: "Trichy, TN", age: "2 years", price: 45000, img: "https://images.unsplash.com/photo-1522850959076-b86424b86a55?w=600&q=80", lifespan: "30-50 years", ownerName: "Nandhini Devi", ownerEmail: "nandhu.d@email.com" },
  { id: 13, name: "Mango", type: "bird", breed: "Lovebird", color: "Green & Orange", native: "Erode, TN", age: "5 months", price: 1500, img: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=600&q=80", lifespan: "10-15 years", ownerName: "Vijay Anand", ownerEmail: "vijay.a@email.com" },
  { id: 14, name: "Snowy", type: "rabbit", breed: "Angora", color: "Fluffy White", native: "Salem, TN", age: "8 months", price: 3200, img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&q=80", lifespan: "7-12 years", ownerName: "Gokul Nath", ownerEmail: "gokul.n@email.com" },
  { id: 15, name: "Thumper", type: "rabbit", breed: "Dutch", color: "Black & White", native: "Vellore, TN", age: "1.5 years", price: 2800, img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&q=80", lifespan: "5-8 years", ownerName: "Saravanan P", ownerEmail: "sarva.p@email.com" },
  { id: 16, name: "Clover", type: "rabbit", breed: "Mini Rex", color: "Castor Brown", native: "Tirunelveli, TN", age: "1 year", price: 3500, img: "https://images.unsplash.com/photo-1535268647977-a403b69fc756?w=600&q=80", lifespan: "8-10 years", ownerName: "Bhavani Shankar", ownerEmail: "bhavani.s@email.com" },
  { id: 17, name: "Bubbles", type: "fish", breed: "Goldfish", color: "Deep Orange", native: "Chennai, TN", age: "3 months", price: 450, img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&q=80", lifespan: "5-10 years", ownerName: "Mani Ratnam", ownerEmail: "mani.r@email.com" },
  { id: 18, name: "Neptune", type: "fish", breed: "Betta", color: "Royal Blue & Red", native: "Coimbatore, TN", age: "4 months", price: 850, img: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600&q=80", lifespan: "2-4 years", ownerName: "Balaji V", ownerEmail: "balaji.v@email.com" }
];

const LOCATIONS = [
  "Pet Paws - Chennai (Adyar Branch)",
  "Pet Paws - Coimbatore (Gandhipuram Branch)",
  "Pet Paws - Madurai (Anna Nagar Branch)",
  "Pet Paws - Trichy (Cantonment Branch)",
  "Pet Paws - Salem (Fairlands Branch)",
  "Pet Paws - Tirunelveli (Palayamkottai Branch)",
  "Pet Paws - Vellore (Katpadi Branch)",
  "Pet Paws - Erode (Perundurai Road Branch)"
];

export default function Adopt() {
  const navigate = useNavigate();
  
  // View Control Routing
  const [currentView, setCurrentView] = useState("companions"); // companions | petcare | medicine | profile | appointments
  const [currentCategory, setCurrentCategory] = useState("all");
  
  // Lists & System states
  const [selectedPet, setSelectedPet] = useState(null);
  const [spotlightPet, setSpotlightPet] = useState(null);
  const [dbPets, setDbPets] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  // Filters State Engine
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [maxPrice, setMaxPrice] = useState("all");

  const [appointmentForm, setAppointmentForm] = useState({ 
    name: "", email: "", phone: "", date: "", time: "", location: LOCATIONS[0] 
  });

  useEffect(() => {
    api.get("/pets")
      .then(({ data }) => {
        const list = data.pets || data;
        if (Array.isArray(list) && list.length > 0) setDbPets(list);
      })
      .catch(() => {});

    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      api.get("/adoptions")
        .then(({ data }) => {
          const list = data.adoptions || data;
          if (Array.isArray(list)) {
            const userAdoptions = list.filter(a => a.email === userEmail).map(a => ({
              id: a._id,
              petName: a.petId?.name || "Companion Pet",
              breed: a.petId?.breed || "",
              img: a.petId?.image || "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80",
              date: a.createdAt ? new Date(a.createdAt).toISOString().split('T')[0] : "Pending",
              time: "Scheduled",
              location: "Pet Paws Store",
              visited: a.status === "approved"
            }));
            setAppointments(userAdoptions);
          }
        })
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      localStorage.setItem("redirectTarget", "/adopt");
      alert("Please sign in first to access our pet center engine.");
      navigate("/auth-gateway");
    }
  }, [navigate]);

  const handleOpenAppointment = (pet) => {
    setSelectedPet(pet);
    setShowAppointmentModal(true);
  };

  const handleBookAppointment = async () => {
    if (!selectedPet) return;
    if (!appointmentForm.name || !appointmentForm.email || !appointmentForm.phone || !appointmentForm.date || !appointmentForm.time || !appointmentForm.location) {
      alert("Please populate all authorization parameters.");
      return;
    }

    const localId = `APT-${Math.floor(Math.random() * 900000 + 100000)}`;
    const newAppointment = {
      id: localId,
      petName: selectedPet.name,
      breed: selectedPet.breed,
      img: selectedPet.img,
      date: appointmentForm.date,
      time: appointmentForm.time,
      location: appointmentForm.location,
      visited: false
    };

    try {
      const response = await api.post("/adoptions", {
        userName: appointmentForm.name,
        email: appointmentForm.email,
        phone: appointmentForm.phone,
        petId: selectedPet._id || selectedPet.id,
        status: "pending",
      });
      if (response.data && response.data._id) {
        newAppointment.id = response.data._id;
      }
    } catch (err) {
      console.error("Adoption booking failed:", err);
    }

    setAppointments([newAppointment, ...appointments]);
    alert(`🎉 Appointment Reserved!\nTicket ID: ${newAppointment.id}\nLocation: ${newAppointment.location}`);
    
    setShowAppointmentModal(false);
    setSelectedPet(null);
    setAppointmentForm({ name: "", email: "", phone: "", date: "", time: "", location: LOCATIONS[0] });
  };

  const toggleVisitedStatus = (id) => {
    setAppointments(appointments.map(apt => apt.id === id ? { ...apt, visited: !apt.visited } : apt));
  };

  // Processing Filter Core logic
  // Merge DB pets (admin-added) on top of static list, deduplicate by name
  const mergedPets = [
    ...dbPets.map(p => ({
      id: p._id,
      _id: p._id,
      name: p.name,
      type: (p.category || "dog").toLowerCase(),
      breed: p.breed,
      color: "",
      native: "Tamil Nadu, TN",
      age: p.age || "Unknown",
      price: p.price || 0,
      img: p.image || "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80",
      lifespan: "",
      ownerName: "",
      ownerEmail: "",
    })),
    ...PETS.filter(sp => !dbPets.some(dp => dp.name.toLowerCase() === sp.name.toLowerCase())),
  ];

  const filteredPets = mergedPets.filter((pet) => {
    const matchCategory = currentCategory === "all" || pet.type === currentCategory;
    const matchSearch = pet.name.toLowerCase().includes(searchQuery.toLowerCase()) || pet.breed.toLowerCase().includes(searchQuery.toLowerCase());
    const matchBreed = selectedBreed === "all" || pet.breed === selectedBreed;
    const matchColor = selectedColor === "all" || pet.color.toLowerCase().includes(selectedColor.toLowerCase()) || selectedColor === "all";
    const matchPriceValue = maxPrice === "all" || pet.price <= parseInt(maxPrice);
    return matchCategory && matchSearch && matchBreed && matchColor && matchPriceValue;
  });

  const uniqueBreeds = ["all", ...new Set(mergedPets.filter(p => currentCategory === "all" || p.type === currentCategory).map(p => p.breed))];

  return (
    <div className="adopt-page">
      {/* ================= LEFT SIDEBAR PANEL ================= */}
      <aside className="adopt-sidebar">
        <div className="adopt-sidebar-logo" onClick={() => setCurrentView("companions")} style={{cursor: "pointer"}}>
          <span className="logo-icon">🐾</span> Pet Paws
        </div>

        <div className="adopt-section-label">NAVIGATE WORKSPACE</div>
        <div className="adopt-categories">
          <button className={`sidebar-cat-btn ${currentView === "companions" ? "active" : ""}`} onClick={() => { setCurrentView("companions"); setSpotlightPet(null); }}>
            <span className="btn-left-sec"><i className="fa-solid fa-paw"></i> Companions</span>
          </button>
          <button className={`sidebar-cat-btn ${currentView === "appointments" ? "active" : ""}`} onClick={() => { setCurrentView("appointments"); setSpotlightPet(null); }}>
            <span className="btn-left-sec"><i className="fa-solid fa-calendar-days"></i> Appointments</span>
            <span className="badge-count" style={{backgroundColor: "var(--accent-terracotta)"}}>{appointments.length}</span>
          </button>
        </div>

        {currentView === "companions" && (
          <>
            <div className="adopt-section-label border-top-divider">BROWSE CATEGORIES</div>
            <div className="adopt-categories">
              {[
                { id: "all", label: "All Pets", icon: "fa-layer-group" },
                { id: "dog", label: "Dogs", icon: "fa-dog" },
                { id: "cat", label: "Cats", icon: "fa-cat" },
                { id: "bird", label: "Birds", icon: "fa-dove" },
                { id: "rabbit", label: "Rabbits", icon: "fa-carrot" },
                { id: "fish", label: "Fish", icon: "fa-fish" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  className={`sidebar-cat-btn ${currentCategory === cat.id ? "active" : ""}`}
                  onClick={() => { setCurrentCategory(cat.id); setSelectedBreed("all"); }}
                >
                  <span className="btn-left-sec"><i className={`fa-solid ${cat.icon}`}></i> {cat.label}</span>
                </button>
              ))}
            </div>

            <div className="adopt-section-label border-top-divider">REFINE FILTER</div>
            <div className="filter-wrapper-box">
              <label>Breed Group</label>
              <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
                {uniqueBreeds.map(b => <option key={b} value={b}>{b === "all" ? "All Breeds" : b}</option>)}
              </select>

              <label>Budget Threshold</label>
              <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                <option value="all">Any Price Range</option>
                <option value="2000">Under ₹2,000</option>
                <option value="10000">Under ₹10,000</option>
                <option value="20000">Under ₹20,000</option>
                <option value="50000">Under ₹50,000</option>
              </select>
            </div>
          </>
        )}

        <div className="sidebar-footer-nav border-top-divider">
          <button className="footer-nav-item" onClick={() => navigate("/")}><i className="fa-solid fa-house"></i> Home</button>
          <button className={`footer-nav-item ${currentView === "petcare" ? "text-warning" : ""}`} onClick={() => setCurrentView("petcare")}><i className="fa-solid fa-heart-pulse"></i> Pet Care</button>
          <button className={`footer-nav-item ${currentView === "medicine" ? "text-warning" : ""}`} onClick={() => setCurrentView("medicine")}><i className="fa-solid fa-prescription-bottle-medical"></i> Medicine</button>
          <button className={`footer-nav-item ${currentView === "profile" ? "text-warning" : ""}`} onClick={() => setCurrentView("profile")}><i className="fa-solid fa-user"></i> My Profile</button>
        </div>
      </aside>

      {/* ================= MAIN INTERFACE CONTROLLER ================= */}
      <main className="adopt-main">
        
        {/* VIEW 1: COMPANIONS MATRIX GRID */}
        {currentView === "companions" && !spotlightPet && (
          <>
            <header className="adopt-topbar">
              <div className="topbar-title-block">
                <h1>Adopt & Visit Store</h1>
                <p>Locate, book appointments, and retrieve your perfect pet companion locally</p>
              </div>
              <div className="topbar-actions-block">
                <div className="search-input-container">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Search by name or pedigree..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
              </div>
            </header>

            <div className="adopt-results-count">
              Showing <strong>{filteredPets.length}</strong> available animals across Tamil Nadu branches
            </div>

            <div className="adopt-grid">
              {filteredPets.map((pet) => (
                <div key={pet.id} className="adopt-pet-card">
                  <div className="adopt-pet-img-wrap">
                    <img src={pet.img} alt={pet.name} className="adopt-pet-img" />
                    <span className="type-tag">{pet.type.toUpperCase()}</span>
                    <span className="price-tag-badge">₹{pet.price.toLocaleString()}</span>
                  </div>

                  <div className="adopt-pet-body">
                    <div className="card-header-row">
                      <h3 className="pet-title-name">{pet.name}</h3>
                      <span className="pet-age-pill">{pet.age}</span>
                    </div>
                    <p className="pet-breed-text">{pet.breed}</p>
                    <p className="text-muted small"><i className="fa-solid fa-location-dot text-danger"></i> Located: {pet.native}</p>

                    <div className="d-flex gap-2 mt-3">
                      <button className="details-accordion-toggle w-50 m-0" onClick={() => setSpotlightPet(pet)}>
                        <i className="fa-solid fa-circle-info"></i> Details
                      </button>
                      <button className="action-btn-adopt w-50" style={{ backgroundColor: "#ffc107", color: "#000", fontWeight: "bold" }} onClick={() => handleOpenAppointment(pet)}>
                        Book Visit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* VIEW: SPOTLIGHT ISOLATED DETAILED SECTION */}
        {spotlightPet && (
          <div className="p-4 bg-white rounded-4 shadow-sm my-3">
            <button className="btn btn-sm btn-outline-secondary mb-4" onClick={() => setSpotlightPet(null)}>
              <i className="fa-solid fa-arrow-left"></i> Back to Companions
            </button>
            <div className="row g-4">
              <div className="col-md-5">
                <img src={spotlightPet.img} alt={spotlightPet.name} className="img-fluid rounded-4 shadow-sm w-100" style={{maxHeight: "380px", objectFit: "cover"}} />
              </div>
              <div className="col-md-7">
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="display-6 fw-bold text-dark mb-0">{spotlightPet.name}</h2>
                  <span className="badge bg-warning text-dark fs-6 px-3 py-2">₹{spotlightPet.price.toLocaleString()}</span>
                </div>
                <p className="text-muted fs-5 mb-4">{spotlightPet.breed} Group</p>
                
                <div className="row g-3 bg-light p-3 rounded-3 mb-4">
                  <div className="col-6"><strong>Age:</strong> <span className="text-secondary">{spotlightPet.age}</span></div>
                  <div className="col-6"><strong>Color Coat:</strong> <span className="text-secondary">{spotlightPet.color}</span></div>
                  <div className="col-6"><strong>Estimated Lifespan:</strong> <span className="text-secondary">{spotlightPet.lifespan}</span></div>
                  <div className="col-6"><strong>Native Nursery:</strong> <span className="text-secondary">{spotlightPet.native}</span></div>
                </div>

                <div className="border p-3 rounded-3 mb-4" style={{borderStyle: "dashed !important"}}>
                  <h5 className="text-primary fw-bold mb-2"><i className="fa-solid fa-address-card"></i> Original Owner Records</h5>
                  <p className="mb-1"><strong>Guardian Name:</strong> {spotlightPet.ownerName}</p>
                  <p className="mb-0"><strong>Contact Email:</strong> {spotlightPet.ownerEmail}</p>
                </div>

                <button className="btn btn-warning w-100 fw-bold py-3 fs-5" onClick={() => handleOpenAppointment(spotlightPet)}>
                  <i className="fa-regular fa-calendar-check"></i> Book Verification & Visit Appointment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: APPOINTMENTS PANEL LIST */}
        {currentView === "appointments" && (
          <div className="p-4 bg-white rounded-4 shadow-sm">
            <h2 className="fw-bold text-dark mb-2"><i className="fa-solid fa-receipt text-warning"></i> Appointment Management Dashboard</h2>
            <p className="text-muted mb-4">Track scheduled store visits, verification processing codes, and collection parameters.</p>
            
            {appointments.length === 0 ? (
              <div className="text-center py-5">
                <i className="fa-regular fa-calendar-xmark display-1 text-muted mb-3"></i>
                <h5>No Active Store Appointments Tracked</h5>
                <button className="btn btn-warning mt-2 fw-bold" onClick={() => setCurrentView("companions")}>Browse Active Pets</button>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Status Check</th>
                      <th>Ticket / Pet Profile</th>
                      <th>Scheduled Configuration</th>
                      <th>Target Store Location Branch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((apt) => (
                      <tr key={apt.id} className={apt.visited ? "table-light text-decoration-line-through opacity-75" : ""}>
                        <td>
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" checked={apt.visited} onChange={() => toggleVisitedStatus(apt.id)} id={apt.id} />
                            <label className="form-check-label small" htmlFor={apt.id}>
                              {apt.visited ? "Visited" : "Pending"}
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <img src={apt.img} alt={apt.petName} style={{width: "50px", height: "50px", objectFit: "cover", borderRadius: "10px"}} />
                            <div>
                              <strong className="d-block">{apt.petName}</strong>
                              <span className="text-muted small">{apt.breed} • {apt.id}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="d-block fw-bold">{apt.date}</span>
                          <span className="text-muted small">{apt.time}</span>
                        </td>
                        <td>
                          <span className="badge bg-secondary p-2"><i className="fa-solid fa-shop"></i> {apt.location}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* VIEW 3: PET CARE AUXILIARY DASHBOARD */}
        {currentView === "petcare" && (
          <div className="p-5 bg-white rounded-4 shadow-sm text-center">
            <i className="fa-solid fa-heart-pulse text-danger display-2 mb-3"></i>
            <h2 className="fw-bold">Pet Care & Grooming Services</h2>
            <p className="text-muted mx-auto" style={{maxWidth: "600px"}}>Book full-body medical health checkups, vaccination tracking cycles, spa cleanup procedures, and behavioral routine trainers at our Tamil Nadu hub structures.</p>
            <button className="btn btn-outline-danger mt-3" onClick={() => setCurrentView("companions")}>Return to Pet Center</button>
          </div>
        )}

        {/* VIEW 4: MEDICINE DISPENSING HUD */}
        {currentView === "medicine" && (
          <div className="p-5 bg-white rounded-4 shadow-sm text-center">
            <i className="fa-solid fa-prescription-bottle-medical text-success display-2 mb-3"></i>
            <h2 className="fw-bold">Veterinary Medicine Store</h2>
            <p className="text-muted mx-auto" style={{maxWidth: "600px"}}>Verified prescription items, nutritional support supplements, tick control treatments, and dietary pet foods distributed directly at counter pickup branches.</p>
            <button className="btn btn-outline-success mt-3" onClick={() => setCurrentView("companions")}>Return to Pet Center</button>
          </div>
        )}

        {/* VIEW 5: USER PROFILE CORE PANEL */}
        {currentView === "profile" && (
          <div className="p-5 bg-white rounded-4 shadow-sm">
            <div className="text-center mb-4">
              <div className="bg-secondary text-white rounded-circle mx-auto d-flex align-items-center justify-content-center" style={{width: "80px", height: "80px", fontSize: "2rem"}}>U</div>
              <h3 className="fw-bold mt-2">Verified Pet Paws Customer</h3>
              <span className="badge bg-info">Tamil Nadu Region Member</span>
            </div>
            <div className="row g-3 mx-auto" style={{maxWidth: "500px"}}>
              <div className="col-12 border-bottom py-2"><strong>Authentication Mode:</strong> <span className="float-end text-success">Active Session</span></div>
              <div className="col-12 border-bottom py-2"><strong>Linked Appointments:</strong> <span className="float-end badge bg-dark">{appointments.length} Visits</span></div>
              <div className="col-12 border-bottom py-2"><strong>Default Jurisdiction:</strong> <span className="float-end text-muted">Tamil Nadu, India</span></div>
            </div>
          </div>
        )}
      </main>

      {/* ================= APPOINTMENT DISPATCH MODAL ================= */}
      {showAppointmentModal && selectedPet && (
        <div className="adopt-modal-overlay" onClick={() => setShowAppointmentModal(false)}>
          <div className="adopt-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-card-header">
              <h3>Schedule Store Visit</h3>
              <button className="modal-close-btn" onClick={() => setShowAppointmentModal(false)}>✕</button>
            </div>
            <div className="modal-card-body">
              <div className="checkout-summary-item-panel">
                <img src={selectedPet.img} alt={selectedPet.name} />
                <div>
                  <h5>Visit Details for {selectedPet.name}</h5>
                  <p className="text-muted mb-0">{selectedPet.breed} • {selectedPet.age}</p>
                  <p className="fw-bold mt-1 text-success">Price Setup: ₹{selectedPet.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="checkout-form-fields mt-3">
                <div className="row g-2">
                  <div className="col-6">
                    <input type="text" placeholder="Your Full Name" value={appointmentForm.name} onChange={(e) => setAppointmentForm({...appointmentForm, name: e.target.value})} />
                  </div>
                  <div className="col-6">
                    <input type="email" placeholder="Email ID" value={appointmentForm.email} onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})} />
                  </div>
                </div>
                <input type="tel" className="w-100 mt-2" placeholder="Phone Number" value={appointmentForm.phone} onChange={(e) => setAppointmentForm({...appointmentForm, phone: e.target.value})} />
                
                <div className="row g-2 mt-2">
                  <div className="col-6">
                    <label className="fw-bold d-block mb-1 small text-muted">Preferred Date</label>
                    <input type="date" className="w-100" value={appointmentForm.date} onChange={(e) => setAppointmentForm({...appointmentForm, date: e.target.value})} />
                  </div>
                  <div className="col-6">
                    <label className="fw-bold d-block mb-1 small text-muted">Preferred Time</label>
                    <input type="time" className="w-100" value={appointmentForm.time} onChange={(e) => setAppointmentForm({...appointmentForm, time: e.target.value})} />
                  </div>
                </div>

                <div className="method-selection-row mt-3">
                  <label className="fw-bold d-block mb-1 small text-muted">Select Target Tamilnadu Collection Branch</label>
                  <select value={appointmentForm.location} onChange={(e) => setAppointmentForm({...appointmentForm, location: e.target.value})}>
                    {LOCATIONS.map((loc, idx) => (
                      <option key={idx} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                <button className="confirm-pipeline-btn mt-4" style={{ backgroundColor: "#28a745" }} onClick={handleBookAppointment}>
                  Confirm Visit Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}