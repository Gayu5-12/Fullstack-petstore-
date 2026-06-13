import React, { useState, useEffect } from "react";
import "../styles/Accessories.css";

const PET_TYPES = [
  { id: "cat",     label: "Cat",     emoji: "🐱" },
  { id: "hamster", label: "Hamster", emoji: "🐹" },
  { id: "dog",     label: "Dog",     emoji: "🐕" },
  { id: "bird",    label: "Parrot",  emoji: "🦜" },
  { id: "rabbit",  label: "Rabbit",  emoji: "🐰" },
  { id: "turtle",  label: "Turtle",  emoji: "🐢" },
];

const CATEGORIES = [
  { id: "Furniture",  count: 28 },
  { id: "Bowls",      count: 20 },
  { id: "Clothing",   count: 11 },
  { id: "Food",       count: 30 },
  { id: "Toys",       count: 29 },
  { id: "Sale",       count: 8  },
];

const ACCESSORIES = [
  { id: 1,  name: "Premium Soft Pet Carrier", price: 2999, img: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=500", category: "Furniture", petType: "all",    tag: null },
  { id: 2,  name: "Ergonomic Ceramic Cat Bowl", price: 1599, img: "https://images.unsplash.com/photo-1601758123927-7c2fc827e401?w=500", category: "Bowls",     petType: "cat",    tag: null },
  { id: 3,  name: "Double Stainless Cat Bowl Set", price: 799,  img: "https://images.unsplash.com/photo-1601758174493-51e2c0073fcf?w=500", category: "Bowls",     petType: "cat",    tag: "Sale" },
  { id: 4,  name: "Organic Nutrient Cat Food Mix", price: 1699, img: "https://images.unsplash.com/photo-1574158622643-69d34d72650f?w=500", category: "Food",      petType: "cat",    tag: null },
  { id: 5,  name: "Anti-Skid Heavy Dog Bowl", price: 349,  img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500", category: "Bowls",     petType: "dog",    tag: null },
  { id: 6,  name: "Orthopedic Velvet Cat Bed", price: 3599, img: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500", category: "Furniture", petType: "cat",    tag: null },
  { id: 7,  name: "Reflective Nylon Dog Leash", price: 729,  img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500", category: "Clothing",  petType: "dog",    tag: null },
  { id: 8,  name: "Memory Foam Deluxe Dog Bed", price: 3199, img: "https://images.unsplash.com/photo-1537151608828-8a2c87b3b389?w=500", category: "Furniture", petType: "dog",    tag: null },
  { id: 9,  name: "Grain-Free Premium Dog Food", price: 1799, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", category: "Food",      petType: "dog",    tag: null },
];

export default function Accessories() {
  const [cart, setCart]                 = useState({});
  const [selectedItems, setSelectedItems] = useState({}); // Stores selection state per item ID inside the cart drawer
  const [toasts, setToasts]             = useState([]);
  const [activePet, setActivePet]       = useState(null);
  const [checkedCats, setCheckedCats]   = useState([]);
  const [priceMax, setPriceMax]         = useState(5000);
  const [sortBy, setSortBy]             = useState("Latest");
  const [isCartOpen, setIsCartOpen]     = useState(false);

  // Load persistent storage configuration safely
  useEffect(() => {
    const saved = localStorage.getItem("accessoriesCart");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCart(parsed);
      // Auto-select everything initially when products populate
      const initialSelection = {};
      Object.keys(parsed).forEach(id => { initialSelection[id] = true; });
      setSelectedItems(initialSelection);
    }
  }, []);

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("accessoriesCart", JSON.stringify(updatedCart));
  };

  const triggerToast = (msg) => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 2500);
  };

  const handleAddToCart = (item) => {
    const updated = { ...cart, [item.id]: (cart[item.id] || 0) + 1 };
    saveCart(updated);
    setSelectedItems(prev => ({ ...prev, [item.id]: true })); // Auto check item when added
    triggerToast(`${item.name} added successfully!`);
  };

  const changeQty = (id, change) => {
    const current = cart[id] || 0;
    const next = current + change;
    const updated = { ...cart };
    if (next <= 0) {
      delete updated[id];
      const nextSelection = { ...selectedItems };
      delete nextSelection[id];
      setSelectedItems(nextSelection);
    } else {
      updated[id] = next;
    }
    saveCart(updated);
  };

  const toggleCartCheckbox = (id) => {
    setSelectedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Computations based on item selection checklist
  const totalItemCount = Object.keys(cart).reduce((sum, id) => sum + (selectedItems[id] ? cart[id] : 0), 0);
  const overallCartQtyDisplay = Object.values(cart).reduce((a, b) => a + b, 0);

  const calculatedTotalPrice = Object.keys(cart).reduce((sum, id) => {
    if (!selectedItems[id]) return sum;
    const matchingProduct = ACCESSORIES.find(item => item.id === parseInt(id));
    return sum + (matchingProduct ? matchingProduct.price * cart[id] : 0);
  }, 0);

  // Filters setup matching configuration layout in Screenshot (76).jpg
  let filteredList = ACCESSORIES.filter(item => {
    if (activePet && item.petType !== activePet && item.petType !== "all") return false;
    if (checkedCats.length > 0 && !checkedCats.includes(item.category)) return false;
    if (item.price > priceMax) return false;
    return true;
  });

  if (sortBy === "Price: Low to High") filteredList.sort((a,b) => a.price - b.price);
  if (sortBy === "Price: High to Low") filteredList.sort((a,b) => b.price - a.price);

  return (
    <div className="acc-root">
      
      {/* Notifications system wrapper */}
      <div className="acc-toasts">
        {toasts.map(t => <div className="acc-toast" key={t.id}>{t.msg}</div>)}
      </div>

      {/* FIXED TITLE CONTAINER SECTION */}
      <section className="acc-hero">
        <div className="acc-hero-container">
          <div className="acc-hero-eyebrow">🐾 Pet Shop</div>
          <h1 className="acc-hero-title">Premium Pet Accessories</h1>
          <p className="acc-hero-sub">
            Browse our handpicked collection of accessories for your beloved pets.
            Add to cart, then visit any of our branches to collect — we'll have it ready!
          </p>

          <div style={{ display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap", marginBottom:"24px" }}>
            <div style={{ background:"rgba(255,255,255,0.2)", borderRadius:"12px", padding:"12px 20px", color:"#fff", fontSize:"0.9rem", fontWeight:"600" }}>🏪 In-Store Pickup</div>
            <div style={{ background:"rgba(255,255,255,0.2)", borderRadius:"12px", padding:"12px 20px", color:"#fff", fontSize:"0.9rem", fontWeight:"600" }}>✅ Vet Verified Products</div>
            <div style={{ background:"rgba(255,255,255,0.2)", borderRadius:"12px", padding:"12px 20px", color:"#fff", fontSize:"0.9rem", fontWeight:"600" }}>⭐ Premium Quality</div>
          </div>

          <div className="acc-cart-trigger-container">
            <button className="acc-cart-btn" onClick={() => setIsCartOpen(true)}>
              🛒 View Cart ({overallCartQtyDisplay})
            </button>
          </div>

          {/* PET TOGGLE CHIPS */}
          <div className="acc-hero-pet-strip">
            <div className={`acc-hero-pet-btn ${!activePet ? 'active' : ''}`} onClick={() => setActivePet(null)}>
              <span>🐾</span><span>All</span>
            </div>
            {PET_TYPES.map(p => (
              <div key={p.id} className={`acc-hero-pet-btn ${activePet === p.id ? 'active' : ''}`} onClick={() => setActivePet(p.id)}>
                <span>{p.emoji}</span><span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT BODY */}
      <div className="acc-body">
        
        {/* SIDEBAR WRAPPER GRID */}
        <aside className="acc-sidebar">
          <div className="acc-sidebar-section">
            <div className="acc-sidebar-title">Filter by categories</div>
            {CATEGORIES.map(cat => (
              <div 
                className="acc-sidebar-row" 
                key={cat.id} 
                onClick={() => setCheckedCats(p => p.includes(cat.id) ? p.filter(x => x !== cat.id) : [...p, cat.id])}
              >
                <input type="checkbox" readOnly checked={checkedCats.includes(cat.id)} />
                <label>{cat.id}</label>
                <span className="acc-sidebar-count">{cat.count}</span>
              </div>
            ))}
          </div>

          <hr className="acc-divider" />

          <div className="acc-sidebar-section">
            <div className="acc-sidebar-title">Filter by price</div>
            <input 
              type="range" 
              className="acc-price-range" 
              min={100} 
              max={5000} 
              value={priceMax} 
              onChange={e => setPriceMax(Number(e.target.value))} 
            />
            <div className="acc-price-labels">
              <span>Price: ₹0 — ₹{priceMax.toLocaleString()}</span>
            </div>
            <button className="acc-apply-btn">Apply</button>
          </div>
        </aside>

        {/* COMPONENT PRODUCTS CONTENT GRID */}
        <main className="acc-main">
          <div className="acc-toolbar">
            <span className="acc-count">Showing 1–{filteredList.length} of {filteredList.length} results</span>
            <select className="acc-sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="acc-grid">
            {filteredList.map(product => (
              <div className="acc-card" key={product.id}>
                <div className="acc-card-img-wrap">
                  <img src={product.img} alt={product.name} className="acc-card-img" />
                  {product.tag && <span className="acc-sale-badge">{product.tag}</span>}
                  <button className="acc-wishlist-btn">🤍</button>
                  {cart[product.id] && <span className="acc-cart-badge">{cart[product.id]}</span>}
                </div>
                <div className="acc-card-body">
                  <div className="acc-card-name">{product.name}</div>
                  <div className="acc-card-price">₹{product.price.toLocaleString()}</div>
                  <button className="acc-add-btn" onClick={() => handleAddToCart(product)}>
                    {cart[product.id] ? `In Cart (${cart[product.id]}) +` : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* OVERLAY PANEL CART DRAWER COMPONENT */}
      {isCartOpen && (
        <div className="acc-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="acc-panel" onClick={e => e.stopPropagation()}>
            
            {/* IN-CART BANNER FOR STORE OPERATING HOURS */}
            <div className="acc-store-hours-banner">
              🏪 Shop by Store: Open 9:00 AM - 7:00 PM
            </div>

            <div className="acc-panel-header">
              <h3>🛒 Current Cart Selection</h3>
              <button className="acc-close-btn" onClick={() => setIsCartOpen(false)}>×</button>
            </div>

            <div className="acc-panel-items">
              {Object.keys(cart).length === 0 ? (
                <p style={{ textAlign: "center", color: "var(--muted)", marginTop: "40px", fontSize: "14px" }}>
                  Your shopping cart container is completely empty.
                </p>
              ) : (
                Object.keys(cart).map(id => {
                  const productItem = ACCESSORIES.find(item => item.id === parseInt(id));
                  if (!productItem) return null;
                  return (
                    <div className="acc-cart-item-row" key={id}>
                      {/* Interactive Selection Checkbox */}
                      <input 
                        type="checkbox" 
                        className="acc-cart-checkbox" 
                        checked={!!selectedItems[id]} 
                        onChange={() => toggleCartCheckbox(id)} 
                      />
                      
                      <img src={productItem.img} alt={productItem.name} className="acc-cart-item-img" />
                      
                      <div className="acc-cart-item-info">
                        <div className="acc-cart-item-name">{productItem.name}</div>
                        <div className="acc-cart-item-price">₹{(productItem.price * cart[id]).toLocaleString()}</div>
                        <div className="acc-qty">
                          <button onClick={() => changeQty(productItem.id, -1)}>−</button>
                          <span>{cart[id]}</span>
                          <button onClick={() => changeQty(productItem.id, 1)}>+</button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="acc-panel-footer">
              <div className="acc-total-row">
                <span>Selected Total ({totalItemCount} items)</span>
                <span>₹{calculatedTotalPrice.toLocaleString()}</span>
              </div>
              <button 
                className="acc-checkout-btn" 
                disabled={totalItemCount === 0}
                onClick={() => {
                  alert(`Order processing initialized for active reservation request totaling ₹${calculatedTotalPrice.toLocaleString()}!`);
                  setIsCartOpen(false);
                }}
              >
                Proceed to Secure Pickup
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}