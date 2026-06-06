import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Accessories.css";

const CATEGORIES = [
  { id: 1, name: "Collars & Leashes", icon: "🔗", count: 18 },
  { id: 2, name: "Beds & Mats", icon: "🛏️", count: 14 },
  { id: 3, name: "Bowls & Feeders", icon: "🥘", count: 20 },
  { id: 4, name: "Toys", icon: "🎾", count: 29 },
  { id: 5, name: "Grooming", icon: "✂️", count: 12 },
  { id: 6, name: "Clothing", icon: "👕", count: 11 },
];

const ACCESSORIES = [
  { id: 1, name: "Premium Dog Collar", price: 499, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500", category: "Collars & Leashes", petType: "dog", tag: "Bestseller", rating: 5 },
  { id: 2, name: "Orthopedic Pet Bed", price: 2499, img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500", category: "Beds & Mats", petType: "all", tag: "Premium", rating: 5 },
  { id: 3, name: "Stainless Steel Bowl Set", price: 349, img: "https://images.unsplash.com/photo-1601758123927-7c2fc827e401?w=500", category: "Bowls & Feeders", petType: "all", tag: "Budget Friendly", rating: 4 },
  { id: 4, name: "Comfortable Leash", price: 299, img: "https://images.unsplash.com/photo-1601758174493-51e2c0073fcf?w=500", category: "Collars & Leashes", petType: "dog", rating: 4 },
  { id: 5, name: "Interactive Rubber Toy", price: 199, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", category: "Toys", petType: "all", tag: "New", rating: 4 },
  { id: 6, name: "Grooming Brush Kit", price: 599, img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500", category: "Grooming", petType: "all", tag: "Popular", rating: 5 },
  { id: 7, name: "Pet Winter Jacket", price: 899, img: "https://images.unsplash.com/photo-1587526488667-dd26f7ca3b77?w=500", category: "Clothing", petType: "dog", rating: 4 },
  { id: 8, name: "Retractable Leash", price: 449, img: "https://images.unsplash.com/photo-1601758174493-51e2c0073fcf?w=500", category: "Collars & Leashes", petType: "dog", rating: 5 },
  { id: 9, name: "Cat Scratching Tree Post", price: 1899, img: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500", category: "Beds & Mats", petType: "cat", tag: "New", rating: 5 },
  { id: 10, name: "Automatic Water Fountain", price: 1599, img: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500", category: "Bowls & Feeders", petType: "all", tag: "Premium", rating: 5 },
  { id: 11, name: "Plush Squeaky Duck Toy", price: 249, img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500", category: "Toys", petType: "dog", rating: 4 },
  { id: 12, name: "Organic Pet Shampoo", price: 399, img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500", category: "Grooming", petType: "all", tag: "Eco Friendly", rating: 5 },
  { id: 13, name: "Cat Litter Box", price: 1299, img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=500", category: "Beds & Mats", petType: "cat", rating: 4 },
  { id: 14, name: "Bird Seed Mix", price: 349, img: "https://images.unsplash.com/photo-1599573412025-e32aa3c4b61d?w=500", category: "Bowls & Feeders", petType: "bird", rating: 5 },
  { id: 15, name: "Rabbit Cage Attachment", price: 599, img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500", category: "Beds & Mats", petType: "rabbit", rating: 4 },
  { id: 16, name: "Fish Tank Filter System", price: 1899, img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500", category: "Bowls & Feeders", petType: "fish", rating: 5 },
  { id: 17, name: "Dog Training Treats", price: 299, img: "https://images.unsplash.com/photo-1537151608828-8a2c87b3b389?w=500", category: "Toys", petType: "dog", tag: "New", rating: 4 },
  { id: 18, name: "Cat Dental Toys", price: 249, img: "https://images.unsplash.com/photo-1574158622643-69d34d72650f?w=500", category: "Toys", petType: "cat", rating: 5 }
];

const BEST_SELLERS = [
  { id: 2, name: "Orthopedic Pet Bed", price: 2499, img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500", sales: 1250 },
  { id: 1, name: "Premium Dog Collar", price: 499, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500", sales: 890 },
  { id: 6, name: "Grooming Brush Kit", price: 599, img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500", sales: 756 },
];

const PET_TYPES = [
  { type: "Dogs", id: "dog", icon: "🐕" },
  { type: "Cats", id: "cat", icon: "🐱" },
  { type: "Birds", id: "bird", icon: "🦜" },
  { type: "Rabbits", id: "rabbit", icon: "🐰" },
  { type: "Fish", id: "fish", icon: "🐠" },
];

const REVIEWS = [
  { name: "Rajesh Kumar", product: "Orthopedic Pet Bed", rating: 5, comment: "Excellent quality! My dog loves it and sleeps better now." },
  { name: "Priya Sharma", product: "Grooming Brush Kit", rating: 5, comment: "Best grooming kit I've bought. Very durable and effective." },
  { name: "Amit Singh", product: "Premium Dog Collar", rating: 4, comment: "Great collar, comfortable and durable. Good value for money." },
];

const OFFERS = [
  { discount: "20%", text: "Off on all Toys - Use code: PLAYTIME20" },
  { discount: "15%", text: "Off on Grooming products - Use code: GROOM15" },
  { discount: "Free Shipping", text: "on orders above ₹500" },
];

export default function Accessories() {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const [boughtItems, setBoughtItems] = useState({});
  const [toasts, setToasts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPetType, setSelectedPetType] = useState(null);


  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: ""
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("accessoriesCart");
    const savedBought = localStorage.getItem("accessoriesBought");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedBought) setBoughtItems(JSON.parse(savedBought));

    // Check if user is logged out
    const handleStorageChange = () => {
      if (localStorage.getItem("loggedIn") !== "true") {
        setCart({});
        setBoughtItems({});
        localStorage.removeItem("accessoriesCart");
        localStorage.removeItem("accessoriesBought");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("accessoriesCart", JSON.stringify(cart));
  }, [cart]);

  // Save bought items to localStorage
  useEffect(() => {
    localStorage.setItem("accessoriesBought", JSON.stringify(boughtItems));
  }, [boughtItems]);

  const showToast = (msg) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  };

  const handleAddToCart = (item) => {
    setCart((prev) => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
    showToast(`${item.name} added to cart! 🛒`);
  };

  const handleUpdateQty = (itemId, change) => {
    setCart((prev) => {
      const updated = { ...prev };
      const newQty = (updated[itemId] || 0) + change;
      if (newQty <= 0) {
        delete updated[itemId];
      } else {
        updated[itemId] = newQty;
      }
      return updated;
    });
  };

  const handleToggleBought = (itemId) => {
    setBoughtItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleBookAppointment = () => {
    if (!appointmentForm.name || !appointmentForm.email || !appointmentForm.phone || !appointmentForm.preferredDate) {
      alert("Please fill all fields");
      return;
    }
    const appointmentData = {
      ...appointmentForm,
      items: Object.keys(cart).map(id => {
        const item = ACCESSORIES.find(a => a.id === parseInt(id));
        return { ...item, quantity: cart[id] };
      }),
      bookingDate: new Date().toLocaleString(),
      status: "Confirmed"
    };
    
    const savedAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    savedAppointments.push(appointmentData);
    localStorage.setItem("appointments", JSON.stringify(savedAppointments));
    
    alert(`✓ Appointment Booked for ${appointmentForm.preferredDate} at ${appointmentForm.preferredTime}\nYour items are reserved until this date!`);
    setShowAppointmentForm(false);
    setAppointmentForm({ name: "", email: "", phone: "", preferredDate: "", preferredTime: "" });
    setCart({});
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const cartTotalCost = Object.keys(cart).reduce((sum, itemId) => {
    const product = ACCESSORIES.find((p) => p.id === parseInt(itemId));
    return sum + (product ? product.price * cart[itemId] : 0);
  }, 0);

  const filteredProducts = ACCESSORIES.filter(item => {
    const matchCategory = !selectedCategory || item.category === selectedCategory;
    const matchPetType = !selectedPetType || item.petType === selectedPetType || item.petType === "all";
    return matchCategory && matchPetType;
  });

  return (
    <div className="accessories-page">
      {/* Toast System Framework */}
      <div className="ac-toast-wrap">
        {toasts.map((t) => (
          <div className="ac-toast" key={t.id}>{t.msg}</div>
        ))}
      </div>

      {/* Appointment Form Modal */}
      {showAppointmentForm && (
        <div className="ac-cart-overlay" onClick={() => setShowAppointmentForm(false)}>
          <div className="ac-cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="ac-cart-header">
              <h3>Book Appointment to Collect Items</h3>
              <button className="ac-close-cart" onClick={() => setShowAppointmentForm(false)}>×</button>
            </div>
            <div className="ac-cart-items-scroll" style={{ padding: "20px" }}>
              <div>
                <label>Full Name</label>
                <input 
                  type="text" 
                  value={appointmentForm.name}
                  onChange={(e) => setAppointmentForm({...appointmentForm, name: e.target.value})}
                  className="form-control mb-3"
                />
                <label>Email</label>
                <input 
                  type="email" 
                  value={appointmentForm.email}
                  onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})}
                  className="form-control mb-3"
                />
                <label>Phone</label>
                <input 
                  type="tel" 
                  value={appointmentForm.phone}
                  onChange={(e) => setAppointmentForm({...appointmentForm, phone: e.target.value})}
                  className="form-control mb-3"
                />
                <label>Preferred Date</label>
                <input 
                  type="date" 
                  value={appointmentForm.preferredDate}
                  onChange={(e) => setAppointmentForm({...appointmentForm, preferredDate: e.target.value})}
                  className="form-control mb-3"
                />
                <label>Preferred Time</label>
                <input 
                  type="time" 
                  value={appointmentForm.preferredTime}
                  onChange={(e) => setAppointmentForm({...appointmentForm, preferredTime: e.target.value})}
                  className="form-control mb-3"
                />
              </div>
            </div>
            <div className="ac-cart-footer">
              <button className="ac-checkout-btn" onClick={handleBookAppointment}>
                Confirm Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====== HERO BANNER ====== */}
      <section className="ac-hero">
        <div className="ac-hero-inner">
          <h1 className="ac-hero-title">Pet Accessories Store</h1>
          <p className="ac-hero-subtitle">Premium & affordable pet supplies available at our shop</p>
          <button className="ac-cart-trigger-btn" onClick={() => setIsCartOpen(true)}>
            🛒 View Cart ({totalItems} items)
          </button>
        </div>
      </section>

      {/* ====== INTERACTIVE SIDEBAR CART MODAL ====== */}
      {isCartOpen && (
        <div className="ac-cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="ac-cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="ac-cart-header">
              <h3>Shopping Cart</h3>
              <button className="ac-close-cart" onClick={() => setIsCartOpen(false)}>×</button>
            </div>

            <div className="ac-cart-items-scroll">
              {totalItems === 0 ? (
                <p className="text-center text-muted py-5">Your cart is empty. Add items to get started!</p>
              ) : (
                Object.keys(cart).map((itemId) => {
                  const item = ACCESSORIES.find((p) => p.id === parseInt(itemId));
                  if (!item) return null;
                  return (
                    <div className="ac-cart-item" key={item.id}>
                      <input
                        type="checkbox"
                        checked={boughtItems[item.id] || false}
                        onChange={() => handleToggleBought(item.id)}
                        title="Mark as bought"
                        style={{ marginRight: "10px", cursor: "pointer" }}
                      />
                      <img src={item.img} alt={item.name} className="ac-cart-item-img" />
                      <div className="ac-cart-item-details">
                        <p className="ac-cart-item-name" style={{ textDecoration: boughtItems[item.id] ? "line-through" : "none" }}>
                          {item.name}
                        </p>
                        <p className="ac-cart-item-price">₹{(item.price * cart[item.id]).toLocaleString()}</p>
                      </div>
                      <div className="ac-cart-qty-ctrl">
                        <button onClick={() => handleUpdateQty(item.id, -1)}>-</button>
                        <span>{cart[item.id]}</span>
                        <button onClick={() => handleUpdateQty(item.id, 1)}>+</button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="ac-cart-footer">
              <div className="ac-cart-total-row">
                <span>Total Amount:</span>
                <span>₹{cartTotalCost.toLocaleString()}</span>
              </div>
              <button 
                className="ac-checkout-btn" 
                onClick={() => { setIsCartOpen(false); setShowAppointmentForm(true); }}
                disabled={totalItems === 0}
              >
                📅 Book Appointment to Collect
              </button>
              <p className="text-center text-muted small mt-2">Items will remain in your cart until you logout</p>
            </div>
          </div>
        </div>
      )}

      <div className="container ac-container">
        {/* ====== CATEGORIES ====== */}
        <section className="ac-section">
          <h2 className="ac-section-title">Shop by Category</h2>
          <div className="ac-categories">
            <div className={`ac-category-item ${!selectedCategory ? 'active' : ''}`} onClick={() => setSelectedCategory(null)}>
              <div className="ac-cat-icon">📦</div>
              <span>All Products</span>
            </div>
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className={`ac-category-item ${selectedCategory === cat.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
              >
                <div className="ac-cat-icon">{cat.icon}</div>
                <span>{cat.name}</span>
                <small>{cat.count} Items</small>
              </div>
            ))}
          </div>
        </section>

        {/* ====== FEATURED ITEMS ====== */}
        <section className="ac-section">
          <h2 className="ac-section-title">Featured Products</h2>
          <div className="ac-grid">
            {filteredProducts.slice(0, 4).map((item) => (
              <div className="ac-card" key={item.id}>
                <div className="ac-img-wrap">
                  <img src={item.img} alt={item.name} className="ac-img" />
                  {item.tag && <span className="ac-tag">{item.tag}</span>}
                  {cart[item.id] && <span className="ac-qty-badge">{cart[item.id]}</span>}
                </div>
                <div className="ac-card-body">
                  <h5 className="ac-name">{item.name}</h5>
                  <div className="ac-price">₹{item.price.toLocaleString()}</div>
                  <button className="ac-btn" onClick={() => handleAddToCart(item)}>
                    {cart[item.id] ? "Add More" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== SHOP BY PET TYPE ====== */}
        <section className="ac-section">
          <h2 className="ac-section-title">Shop by Pet Type</h2>
          <div className="ac-pet-types">
            {PET_TYPES.map((pet) => {
              const petProducts = ACCESSORIES.filter(a => a.petType === pet.id || a.petType === "all");
              return (
                <div key={pet.id} className="ac-pet-card">
                  <div className="ac-pet-icon">{pet.icon}</div>
                  <h4>{pet.type}</h4>
                  <p>{petProducts.length} Products</p>
                  <button 
                    className="ac-pet-btn"
                    onClick={() => {
                      const next = selectedPetType === pet.id ? null : pet.id;
                      setSelectedPetType(next);
                      setSelectedCategory(null);
                      // “Explore by pet” should work like real shop filtering.
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={{ backgroundColor: selectedPetType === pet.id ? "#11998e" : "" }}
                  >
                    {selectedPetType === pet.id ? "✓ Exploring" : `Explore (${pet.type})`}
                  </button>


                </div>
              );
            })}
          </div>
        </section>

        {/* ====== BEST SELLERS ====== */}
        <section className="ac-section">
          <h2 className="ac-section-title">Best Sellers</h2>
          <div className="ac-grid">
            {BEST_SELLERS.map((item) => (
              <div className="ac-card" key={item.id}>
                <div className="ac-img-wrap">
                  <img src={item.img} alt={item.name} className="ac-img" />
                  <span className="ac-bestseller-badge">🏆 Bestseller</span>
                </div>
                <div className="ac-card-body">
                  <h5 className="ac-name">{item.name}</h5>
                  <p className="text-muted small">{item.sales.toLocaleString()} sold recently</p>
                  <div className="ac-price">₹{item.price.toLocaleString()}</div>
                  <button className="ac-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== REVIEWS ====== */}
        <section className="ac-section">
          <h2 className="ac-section-title">Customer Reviews</h2>
          <div className="ac-reviews">
            {REVIEWS.map((review, idx) => (
              <div className="ac-review-card" key={idx}>
                <strong>{review.name}</strong>
                <p className="text-muted small mb-1">{review.product}</p>
                <p className="mb-0">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* ====== OFFERS ====== */}
        <section className="ac-section">
          <h2 className="ac-section-title">Current Offers</h2>
          <div className="ac-offers">
            {OFFERS.map((offer, idx) => (
              <div className="ac-offer-card" key={idx}>
                <div className="ac-offer-discount">{offer.discount}</div>
                <p className="m-0 text-white">{offer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ====== ALL PRODUCTS GALLERY ====== */}
        <section className="ac-section">
          <h2 className="ac-section-title">All Products Available in Shop</h2>
          <div className="ac-grid">
            {filteredProducts.map((item) => (
              <div className="ac-card" key={item.id}>
                <div className="ac-img-wrap">
                  <img src={item.img} alt={item.name} className="ac-img" />
                  {item.tag && <span className="ac-tag">{item.tag}</span>}
                  {cart[item.id] && <span className="ac-qty-badge">{cart[item.id]}</span>}
                </div>
                <div className="ac-card-body">
                  <h5 className="ac-name">{item.name}</h5>
                  <small className="ac-category">{item.category}</small>
                  <div className="ac-price">₹{item.price.toLocaleString()}</div>
                  <button className="ac-btn" onClick={() => handleAddToCart(item)}>
                    {cart[item.id] ? "Add More" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== CTA SECTION ====== */}
        <section className="ac-section">
          <div style={{ backgroundColor: "#11998e", padding: "40px", borderRadius: "10px", textAlign: "center", color: "white" }}>
            <h3>Ready to Shop?</h3>
            <p>Visit our store to explore all products and collect your items directly</p>
            <button className="ac-cart-trigger-btn" onClick={() => setIsCartOpen(true)}>
              Start Shopping Now
            </button>
          </div>
        </section>
      </div>

      <footer className="ac-footer">
        <span>🐾 Pet Paws Shop Hub</span>
        <span>© 2026 Pet Paws Ecosystem. All Rights Reserved.</span>
      </footer>
    </div>
  );
}