import { useState } from "react";
import "../styles/Page.css"; // Ensure standard resets are applied if any

const FAQS = [
  {
    category: "Adoption",
    icon: "🐾",
    items: [
      { q: "How do I adopt a pet?", a: "Sign in and visit the Adopt page to browse available pets. Click 'Book Visit' to schedule an appointment at your nearest branch." },
      { q: "Is there an adoption fee?", a: "Yes, each pet has a listed adoption price shown on their card. This covers vaccinations, health checks, and documentation." },
      { q: "Can I visit before adopting?", a: "Absolutely. Use the 'Book Visit' button to schedule a store visit at any of our Tamil Nadu branches." },
    ],
  },
  {
    category: "Accessories & Medicine",
    icon: "🛒",
    items: [
      { q: "Do you ship accessories across India?", a: "Our accessories are available for in-store pickup. Visit your nearest Pet Paws branch to collect your order." },
      { q: "Are all medicines vet-verified?", a: "Yes. Every medicine listed in our pharmacy is verified by certified veterinarians and requires in-store collection." },
      { q: "What is your return policy?", a: "Returns are accepted for eligible products within 7 days of purchase. Medicines are non-returnable once dispensed." },
    ],
  },
  {
    category: "Account & Support",
    icon: "👤",
    items: [
      { q: "Can I book a vet appointment online?", a: "Yes, our Pet Care page lets you book consultations with qualified vets available at our branches." },
      { q: "How do I reset my password?", a: "Click 'Forgot Password' on the login page, enter your registered email, and follow the instructions sent to you." },
      { q: "How do I contact support?", a: "Visit our Contact page and fill out the form. Our team responds within 24 hours on working days." },
    ],
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (key) => setOpenIndex(openIndex === key ? null : key);

  return (
    <main style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)", minHeight: "100vh", paddingBottom: "80px", fontFamily: "'Inter', sans-serif" }}>

      {/* Modern Hero Section */}
      <div style={{ position: "relative", overflow: "hidden", padding: "100px 20px 80px", textAlign: "center", color: "#fff" }}>
        {/* Abstract Background Shapes */}
        <div style={{ position: "absolute", top: "-50px", left: "10%", width: "200px", height: "200px", background: "linear-gradient(135deg, #E94560, #FFB830)", borderRadius: "50%", filter: "blur(80px)", opacity: 0.6, zIndex: 0 }}></div>
        <div style={{ position: "absolute", bottom: "-50px", right: "10%", width: "250px", height: "250px", background: "linear-gradient(135deg, #0F3460, #E94560)", borderRadius: "50%", filter: "blur(100px)", opacity: 0.5, zIndex: 0 }}></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "80px", height: "80px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", borderRadius: "24px", fontSize: "2.5rem", marginBottom: "24px", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)" }}>❓</div>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "800", margin: "0 0 16px", letterSpacing: "-1px", background: "linear-gradient(to right, #ffffff, #a0a5ba)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ opacity: 0.8, maxWidth: "600px", margin: "0 auto", fontSize: "1.15rem", lineHeight: "1.6" }}>
            Everything you need to know before you buy, adopt, or care for your pet. Can't find the answer? We're here to help.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
        {FAQS.map((section) => (
          <div key={section.category} style={{ marginBottom: "48px" }}>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: "700", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", background: "rgba(233, 69, 96, 0.15)", borderRadius: "12px", color: "#E94560", fontSize: "1.2rem" }}>{section.icon}</span>
              {section.category}
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {section.items.map((item, idx) => {
                const key = `${section.category}-${idx}`;
                const isOpen = openIndex === key;
                return (
                  <div key={idx} style={{ 
                    background: isOpen ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)", 
                    backdropFilter: "blur(16px)", 
                    borderRadius: "16px", 
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: isOpen ? "0 10px 30px rgba(0,0,0,0.2)" : "none"
                  }}>
                    <button
                      onClick={() => toggle(key)}
                      style={{ width: "100%", textAlign: "left", padding: "24px", background: "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1.1rem", fontWeight: isOpen ? "600" : "500", color: "#fff", transition: "all 0.3s" }}
                    >
                      <span style={{ paddingRight: "24px", lineHeight: "1.4" }}>{item.q}</span>
                      <div style={{ 
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: "32px", height: "32px", flexShrink: 0,
                        background: isOpen ? "#E94560" : "rgba(255,255,255,0.1)", 
                        borderRadius: "50%", color: "#fff",
                        transform: isOpen ? "rotate(135deg)" : "rotate(0)", 
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      </div>
                    </button>
                    
                    <div style={{ 
                      maxHeight: isOpen ? "200px" : "0", 
                      opacity: isOpen ? 1 : 0, 
                      overflow: "hidden", 
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      padding: isOpen ? "0 24px 24px" : "0 24px",
                      color: "#a0a5ba", 
                      lineHeight: "1.7", 
                      fontSize: "1rem" 
                    }}>
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Premium CTA */}
        <div style={{ 
          marginTop: "64px", 
          textAlign: "center", 
          background: "linear-gradient(135deg, rgba(233, 69, 96, 0.1), rgba(15, 52, 96, 0.2))", 
          backdropFilter: "blur(20px)",
          borderRadius: "24px", 
          padding: "48px 32px", 
          border: "1px solid rgba(233, 69, 96, 0.2)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ position: "absolute", top: "0", left: "0", right: "0", height: "4px", background: "linear-gradient(90deg, #E94560, #FFB830, #0F3460)" }}></div>
          <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>💬</div>
          <h3 style={{ color: "#fff", fontSize: "2rem", fontWeight: "700", marginBottom: "12px", letterSpacing: "-0.5px" }}>Still have questions?</h3>
          <p style={{ color: "#a0a5ba", marginBottom: "32px", fontSize: "1.1rem" }}>Our dedicated support team is ready to help you with anything.</p>
          <a href="/contact" style={{ 
            display: "inline-block",
            background: "#E94560", 
            color: "#fff", 
            padding: "16px 36px", 
            borderRadius: "30px", 
            textDecoration: "none", 
            fontWeight: "600", 
            fontSize: "1.05rem",
            boxShadow: "0 8px 24px rgba(233, 69, 96, 0.4)",
            transition: "all 0.3s ease",
            transform: "translateY(0)"
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(233, 69, 96, 0.6)"; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(233, 69, 96, 0.4)"; }}
          >
            Get in Touch Today
          </a>
        </div>
      </div>
    </main>
  );
}
