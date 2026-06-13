import React from "react";
import "../styles/Terms.css";

const SECTIONS = [
  { icon: "✅", title: "Acceptance of Terms", text: "By accessing or using the Pet Paws platform, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of the service immediately." },
  { icon: "🐾", title: "Use of the Platform", text: "You may use Pet Paws exclusively for personal, non-commercial purposes including pet adoption, accessory purchases, veterinary booking, and related pet care services. Unauthorized commercial use is strictly prohibited." },
  { icon: "👤", title: "User Accounts", text: "You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorized use of your account. Pet Paws is not liable for losses resulting from unauthorized access due to your negligence." },
  { icon: "💳", title: "Payments & Pricing", text: "All prices are listed in Indian Rupees (₹). Payments for accessories and adoption fees are processed at our physical branches. Pet Paws reserves the right to modify pricing at any time without prior notice." },
  { icon: "🔄", title: "Returns & Refunds", text: "Accessories may be returned within 7 days of purchase in original condition. Adoption fees are non-refundable once the adoption process is completed. Medicines and health products cannot be returned after dispensing." },
  { icon: "🚫", title: "Prohibited Activities", text: "Users must not misrepresent pet information, engage in fraudulent transactions, attempt to manipulate platform features, or use the service for any illegal purposes. Violations will result in immediate account termination." },
  { icon: "⚖️", title: "Limitation of Liability", text: "Pet Paws provides the platform on an 'as is' basis. We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services." },
  { icon: "🔔", title: "Changes to Terms", text: "We reserve the right to update these terms at any time. Continued use of the platform after changes are posted constitutes your acceptance of the revised terms. We will notify registered users of significant changes via email." },
];

export default function Terms() {
  return (
    <main className="tc-root">

      {/* Decorative Structural Hero Header */}
      <div className="tc-hero">
        <div className="tc-shape-top"></div>
        <div className="tc-shape-bottom"></div>

        <div className="tc-hero-content">
          <div className="tc-hero-badge">📋</div>
          <h1 className="tc-hero-title">Terms & Conditions</h1>
          <p className="tc-hero-sub">
            Please read these terms carefully before using the Pet Paws website and services.
          </p>
          <div className="tc-timestamp-tag">
            Last updated: January 2025
          </div>
        </div>
      </div>

      <div className="tc-container">

        {/* Informative Platform Introduction Card */}
        <div className="tc-intro-card">
          <p>
            These Terms and Conditions govern your use of the Pet Paws platform, including our website, mobile experience, and in-store services across Tamil Nadu. By continuing to use Pet Paws, you enter into a binding agreement with us.
          </p>
        </div>

        {/* Vertical Stack Layout Grid */}
        <div className="tc-grid-stack">
          {SECTIONS.map((s, i) => (
            <div key={i} className="tc-section-card">
              <div className="tc-icon-frame">
                {s.icon}
              </div>
              <div>
                <h3 className="tc-card-title">{s.title}</h3>
                <p className="tc-card-body">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Intermediary Conversion Panel Banner */}
        <div className="tc-cta-banner">
          <div className="tc-cta-top-stripe"></div>
          <h3 className="tc-cta-title">Questions about our terms?</h3>
          <p className="tc-cta-sub">Our team is happy to clarify any of the above policies.</p>
          <a href="/contact" className="tc-cta-link-btn">
            Get in Touch
          </a>
        </div>
        
      </div>
    </main>
  );
}