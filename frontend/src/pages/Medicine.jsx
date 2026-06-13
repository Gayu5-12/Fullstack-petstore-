import { useState, useEffect } from "react";
import "../styles/Medicine.css";
import api from "../api/axios";

const MEDICINES = [
  { id: 1, name: "Joint Support Plus", category: "Supplements", description: "Glucosamine & Chondroitin for joint health", usage: "Rebuilds cartilage matrix, reduces fluid inflammation, and improves agility in senior animals.", dosage: "Dogs & Cats — follow vet guidance", stock: "In Stock", icon: "🦴", tags: ["Senior", "Mobility"] },
  { id: 2, name: "Omega-3 Fish Oil", category: "Supplements", description: "Rich omega-3 for coat & skin health", usage: "Alleviates dry flaky skin, prevents seasonal shedding, and enhances coat sheen.", dosage: "1–2 capsules daily with food", stock: "In Stock", icon: "🐟", tags: ["Coat", "Skin"] },
  { id: 3, name: "Probiotic Blend", category: "Digestive", description: "Daily digestive balance & immunity", usage: "Restores positive gut microflora balance, eases digestion, and controls loose stools.", dosage: "Add to food — daily use", stock: "Low Stock", icon: "💧", tags: ["Gut Health", "Daily"] },
  { id: 4, name: "Anti-Allergy Tablets", category: "Allergy", description: "Relief from itching & allergies", usage: "Blocks histamines triggered by pollen or dust. Reduces scratching and irritation.", dosage: "As per vet prescription", stock: "In Stock", icon: "💊", tags: ["Vet Rx", "Seasonal"] },
  { id: 5, name: "Calcium & Vitamin D3", category: "Bone Health", description: "Strong bones & teeth development", usage: "Optimizes bone mineralization in growth stages. Ideal for puppies and kittens.", dosage: "Puppies & Kittens — daily", stock: "In Stock", icon: "🥛", tags: ["Growth", "Puppies"] },
  { id: 6, name: "Multivitamin Chews", category: "Supplements", description: "Complete nutritional support", usage: "Fills nutrient gaps, boosting energy and vitality across all life stages.", dosage: "1 chew daily", stock: "In Stock", icon: "🍖", tags: ["All Ages", "Energy"] },
  { id: 7, name: "Heart Health Supplement", category: "Cardiac", description: "Support for healthy heart function", usage: "Enriched with Taurine to reinforce cardiac muscle and circulation.", dosage: "Twice daily with meals", stock: "In Stock", icon: "❤️", tags: ["Cardiac", "Senior"] },
  { id: 8, name: "Thyroid Support", category: "Thyroid", description: "Iodine-rich formula for thyroid", usage: "Balances metabolic hormones and energy profiles. Suitable for cats with hyperthyroid conditions.", dosage: "Daily — vet monitored", stock: "Out of Stock", icon: "⚡", tags: ["Metabolism", "Cats"] },
  { id: 9, name: "Arthritis Relief Gel", category: "Pain Relief", description: "Topical relief for joint pain", usage: "Cooling analgesic gel that minimizes stiffness and reduces joint discomfort on contact.", dosage: "Apply 2–3 times daily", stock: "In Stock", icon: "🧴", tags: ["Topical", "Senior"] },
  { id: 10, name: "Immune Booster", category: "Immunity", description: "Strengthen immune system naturally", usage: "Contains natural antioxidants to fortify antibodies and improve resistance to infections.", dosage: "Daily supplement", stock: "In Stock", icon: "🛡️", tags: ["Preventive", "All Ages"] },
  { id: 11, name: "Ear Cleaner Solution", category: "Ear Care", description: "Gentle ear cleaning & infection prevention", usage: "Breaks down wax buildup and controls yeast growth to prevent ear infections.", dosage: "Weekly application", stock: "In Stock", icon: "👂", tags: ["Grooming", "Preventive"] },
  { id: 12, name: "Flea & Tick Prevention", category: "Parasite", description: "Monthly flea and tick treatment", usage: "Kills external parasites on contact. Provides 30-day continuous protection.", dosage: "Monthly topical treatment", stock: "In Stock", icon: "🐜", tags: ["External", "Monthly"] },
];

const STOCK_CONFIG = {
  "In Stock":    { cls: "stock-in",  dot: "#4CAF50" },
  "Low Stock":   { cls: "stock-low", dot: "#FF9800" },
  "Out of Stock":{ cls: "stock-out", dot: "#F44336" },
};

export default function Medicine() {
  const [medicines, setMedicines] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [reserveForm, setReserveForm] = useState({
    name: "",
    email: localStorage.getItem("userEmail") || "",
    phone: "",
    quantity: 1
  });

  useEffect(() => {
    api.get("/medicines")
      .then(({ data }) => {
        const list = data.data || data.medicines || data;
        if (Array.isArray(list) && list.length > 0) {
          setMedicines(list);
        } else {
          setMedicines(MEDICINES);
        }
      })
      .catch(() => {
        setMedicines(MEDICINES);
      });
  }, []);

  const handleReserveSubmit = async () => {
    if (!reserveForm.name || !reserveForm.email || !reserveForm.phone) {
      alert("Please fill out all fields for reservation.");
      return;
    }

    try {
      await api.post("/medicines/orders", {
        medicineId: modal._id || modal.id,
        medicineName: modal.name,
        userName: reserveForm.name,
        email: reserveForm.email,
        phone: reserveForm.phone,
        quantity: reserveForm.quantity
      });
      alert(`🎉 Medicine Reserved successfully! Quantity: ${reserveForm.quantity} of ${modal.name}. You can pick it up in-store.`);
      setModal(null);
      setReserveForm({ name: "", email: localStorage.getItem("userEmail") || "", phone: "", quantity: 1 });
    } catch (err) {
      console.error(err);
      alert("Failed to submit reservation. Please try again.");
    }
  };

  const categories = ["All", ...new Set(medicines.map(m => m.category))];

  const filtered = medicines.filter(m => {
    const catOk = activeCategory === "All" || m.category === activeCategory;
    const q = search.toLowerCase();
    const searchOk = m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q) || m.category.toLowerCase().includes(q);
    return catOk && searchOk;
  });

  return (
    <main className="ph-page">

      {/* ── HERO ── */}
      <header className="ph-hero">
        <div className="ph-hero__badge">🏥 In-Store Only</div>
        <h1 className="ph-hero__title">Pet Pharmacy</h1>
        <p className="ph-hero__sub">
          Professional-grade medicines &amp; supplements — verified by certified vets.<br/>
          Visit our store to purchase.
        </p>
        <div className="ph-hero__search-wrap">
          <span className="ph-hero__search-icon">🔍</span>
          <input
            className="ph-hero__search"
            type="text"
            placeholder="Search medicines, categories…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="ph-hero__clear" onClick={() => setSearch("")}>✕</button>
          )}
        </div>
      </header>

      <div className="ph-body">

        {/* ── CATEGORIES ── */}
        <nav className="ph-cats">
          <span className="ph-cats__label">Filter by:</span>
          <div className="ph-cats__pills">
            {categories.map(cat => (
              <button
                key={cat}
                className={`ph-pill ${activeCategory === cat ? "ph-pill--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        {/* ── RESULTS HEADER ── */}
        <div className="ph-results-header">
          <h2 className="ph-results-title">
            {activeCategory === "All" ? "All Products" : activeCategory}
            <span className="ph-results-count">{filtered.length} item{filtered.length !== 1 ? "s" : ""}</span>
          </h2>
        </div>

        {/* ── GRID ── */}
        {filtered.length > 0 ? (
          <div className="ph-grid">
            {filtered.map((med, i) => {
              const sc = STOCK_CONFIG[med.stock];
              return (
                <article
                  className="ph-card"
                  key={med.id}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className="ph-card__top">
                    <span className={`ph-stock ${sc.cls}`}>
                      <span className="ph-stock__dot" style={{ background: sc.dot }} />
                      {med.stock}
                    </span>
                    <div className="ph-card__icon">{med.icon}</div>
                  </div>

                  <div className="ph-card__body">
                    <span className="ph-card__cat">{med.category}</span>
                    <h3 className="ph-card__name">{med.name}</h3>
                    <p className="ph-card__desc">{med.description}</p>

                    <div className="ph-card__tags">
                      {med.tags.map(t => <span className="ph-tag" key={t}>{t}</span>)}
                    </div>

                    <button
                      className="ph-card__btn"
                      onClick={() => setModal(med)}
                      disabled={med.stock === "Out of Stock"}
                    >
                      {med.stock === "Out of Stock" ? "Unavailable" : "View Details"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="ph-empty">
            <div className="ph-empty__icon">🔍</div>
            <p>No medicines found for "<strong>{search}</strong>"</p>
            <button className="ph-pill ph-pill--active" onClick={() => { setSearch(""); setActiveCategory("All"); }}>
              Clear filters
            </button>
          </div>
        )}

        {/* ── NOTICE ── */}
        <section className="ph-notice">
          <div className="ph-notice__icon">⚕️</div>
          <div className="ph-notice__text">
            <strong>In-Store Purchase Only</strong> — We do not sell or ship medicines online.
            Visit our clinic to collect your pet's medication. Some products require a valid veterinary prescription.
            Our pharmacist is available <strong>Mon–Sat, 9 AM – 7 PM</strong>.
          </div>
        </section>

      </div>

      {/* ── MODAL ── */}
      {modal && (
        <div className="ph-overlay" onClick={() => setModal(null)}>
          <div className="ph-modal" onClick={e => e.stopPropagation()}>
            <button className="ph-modal__close" onClick={() => setModal(null)}>✕</button>

            <div className="ph-modal__icon">{modal.icon}</div>
            <span className="ph-card__cat" style={{ fontSize: "0.8rem" }}>{modal.category}</span>
            <h2 className="ph-modal__name">{modal.name}</h2>
            <p className="ph-modal__desc">{modal.description}</p>

            <div className="ph-modal__row">
              <div className="ph-modal__block">
                <div className="ph-modal__label">📋 Usage</div>
                <div className="ph-modal__val">{modal.usage}</div>
              </div>
              <div className="ph-modal__block">
                <div className="ph-modal__label">💊 Dosage</div>
                <div className="ph-modal__val">{modal.dosage}</div>
              </div>
              <div className="ph-modal__block">
                <div className="ph-modal__label">📦 Availability</div>
                <div className="ph-modal__val">
                  <span className={`ph-stock ${STOCK_CONFIG[modal.stock].cls}`}>
                    <span className="ph-stock__dot" style={{ background: STOCK_CONFIG[modal.stock].dot }} />
                    {modal.stock}
                  </span>
                </div>
              </div>
            </div>

            <div className="ph-modal__tags">
              {modal.tags.map(t => <span className="ph-tag" key={t}>{t}</span>)}
            </div>

            <div className="ph-modal__reserve-form" style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #eee" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "12px", color: "var(--dark-chocolate)" }}>Reserve for Pickup</h4>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "12px" }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  style={{ flex: "1 1 45%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "0.85rem" }}
                  value={reserveForm.name} 
                  onChange={e => setReserveForm({...reserveForm, name: e.target.value})} 
                />
                <input 
                  type="email" 
                  placeholder="Email ID" 
                  style={{ flex: "1 1 45%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "0.85rem" }}
                  value={reserveForm.email} 
                  onChange={e => setReserveForm({...reserveForm, email: e.target.value})} 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  style={{ flex: "1 1 45%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "0.85rem" }}
                  value={reserveForm.phone} 
                  onChange={e => setReserveForm({...reserveForm, phone: e.target.value})} 
                />
                <input 
                  type="number" 
                  placeholder="Qty" 
                  min="1" 
                  style={{ width: "60px", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "0.85rem" }}
                  value={reserveForm.quantity} 
                  onChange={e => setReserveForm({...reserveForm, quantity: parseInt(e.target.value) || 1})} 
                />
              </div>
              <button 
                className="ph-card__btn" 
                style={{ width: "100%", background: "#4CAF50", color: "#fff", border: "none", cursor: "pointer", padding: "10px", borderRadius: "6px", fontWeight: "bold" }}
                onClick={handleReserveSubmit}
              >
                Confirm Reservation
              </button>
            </div>

            <div className="ph-modal__footer">
              🏪 Available exclusively in-store — visit us to collect this product.
            </div>
          </div>
        </div>
      )}

    </main>
  );
}