import React from "react";
import "../styles/Privacy.css";

const SECTIONS = [
  { icon: "📋", title: "Information We Collect", text: "We collect your name, email address, phone number, and profile details when you register or interact with our services. We also collect pet preferences, order history, appointment records, and support requests to deliver a seamless experience." },
  { icon: "🔍", title: "How We Use Your Data", text: "Your information is used to process adoptions, manage orders, send appointment confirmations, respond to support queries, and improve our platform. We may send service-related emails; you can opt out of marketing emails at any time." },
  { icon: "🤝", title: "Data Sharing", text: "We do not sell your personal data to third parties. We may share anonymized, aggregated data for analytical purposes. We may share necessary data with our branch partners to fulfil your in-store orders and appointments." },
  { icon: "🔒", title: "Data Security", text: "We implement industry-standard security measures including encrypted connections (HTTPS), hashed passwords, and secure database access controls. While we take all reasonable precautions, no internet transmission is 100% secure." },
  { icon: "🍪", title: "Cookies & Tracking", text: "We use essential cookies to maintain your login session and improve site performance. We do not use third-party advertising trackers. You can disable cookies in your browser settings, though this may affect some features." },
  { icon: "👶", title: "Children's Privacy", text: "Pet Paws is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with data, please contact us immediately so we can delete it." },
  { icon: "✏️", title: "Your Rights", text: "You have the right to access, correct, or delete your personal data at any time. You can update your profile from the dashboard or contact our support team. We will process all data requests within 7 working days." },
  { icon: "🔔", title: "Policy Updates", text: "We may update this Privacy Policy periodically. When we make material changes, we will notify registered users by email and update the 'Last Updated' date on this page. Continued use of our services constitutes acceptance." },
];

export default function Privacy() {
  return (
    <main className="pr-root">

      {/* Hero Presentation Header Block */}
      <div className="pr-hero">
        <div className="pr-shape-top"></div>
        <div className="pr-shape-bottom"></div>

        <div className="pr-hero-container">
          <div className="pr-hero-badge">🔒</div>
          <h1 className="pr-hero-title">Privacy Policy</h1>
          <p className="pr-hero-sub">
            We are committed to protecting your personal information and being transparent about how we use it.
          </p>
          <div className="pr-timestamp-tag">
            Last updated: January 2025
          </div>
        </div>
      </div>

      <div className="pr-main-container">

        {/* Introduction Panel Card */}
        <div className="pr-intro-card">
          <p>
            This Privacy Policy explains how Pet Paws collects, uses, stores, and protects your personal data when you use our platform. We believe in full transparency and your right to know exactly how your information is handled.
          </p>
        </div>

        {/* Structured Info Blocks Stack Grid */}
        <div className="pr-grid-stack">
          {SECTIONS.map((s, i) => (
            <div key={i} className="pr-section-card">
              <div className="pr-icon-frame">
                {s.icon}
              </div>
              <div>
                <h3 className="pr-card-title">{s.title}</h3>
                <p className="pr-card-body">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA Conversion Banner */}
        <div className="pr-cta-banner">
          <div className="pr-cta-top-stripe"></div>
          <h3 className="pr-cta-title">Privacy concerns or requests?</h3>
          <p className="pr-cta-sub">Contact our data protection team and we'll respond within 7 working days.</p>
          <a href="/contact" className="pr-cta-link-btn">
            Contact Support
          </a>
        </div>
        
      </div>
    </main>
  );
}