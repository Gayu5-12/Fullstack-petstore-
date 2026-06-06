import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="ap-page">
      {/* Header Section */}
      <header className="ap-header">
        <h1 className="ap-brand-title">About <span className="ap-highlight">Pet Paws</span></h1>
        <p className="ap-tagline">“Caring for your friends, like family since 2019.”</p>
      </header>

      <main className="ap-container">
        
        {/* Our Identity Section */}
        <section className="ap-section ap-identity-grid">
          <div className="ap-identity-text">
            <h2 className="ap-section-title">Our Identity & Ecosystem</h2>
            <p>
              Pet Paws is an omni-present platform built specifically for modern pet parents. 
              We bring specialized ecosystem solutions across routine veterinary health, tracking, 
              expert rescue operation consulting, community management, and medical product supplies 
              right into a unified portal for animals.
            </p>
            <p>
              We believe that hosting high-quality pet care, authentic clinical resources, and seamless 
              adoption channels shouldn't be complicated. Our custom-tailored solutions scale with each 
              pet's lifestyle, guaranteeing safety, nurturing, and happiness for every single paw.
            </p>
          </div>
          <div className="ap-identity-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800" 
              alt="Dog getting care" 
              className="ap-identity-img"
            />
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="ap-section ap-mv-grid">
          <div className="ap-mv-card">
            <h3 className="ap-mv-title"><span className="ap-card-icon">🎯</span> Our Mission</h3>
            <p>To simplify pet parenting by delivering vetted, transparent services of healthcare, premium products, and safe adoption systems that resourcefully domesticate animals in intense and absolute compassion.</p>
          </div>
          <div className="ap-mv-card">
            <h3 className="ap-mv-title"><span className="ap-card-icon">👁️</span> Our Vision</h3>
            <p>To become the world's most trusted spiritual tech-based platform for holistic pet care solutions, engineering a future where no rescue animal is left without a home and shelter.</p>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="ap-section ap-metrics-section">
          <h2 className="ap-center-title">Pet Paws by the Numbers</h2>
          <div className="ap-metrics-grid">
            <div className="ap-metric-box">
              <span className="ap-metric-number">12,000+</span>
              <span className="ap-metric-label">HAPPY PET PARENTS</span>
            </div>
            <div className="ap-metric-box">
              <span className="ap-metric-number">45+</span>
              <span className="ap-metric-label">VETTED CLINICS</span>
            </div>
            <div className="ap-metric-box">
              <span className="ap-metric-number">3,500+</span>
              <span className="ap-metric-label">SUCCESSFUL ADOPTIONS</span>
            </div>
            <div className="ap-metric-box">
              <span className="ap-metric-number">99.4%</span>
              <span className="ap-metric-label">SATISFACTION RATE</span>
            </div>
          </div>
        </section>

        {/* Strategic Milestones Section */}
        <section className="ap-section ap-timeline-section">
          <h2 className="ap-center-title">Our Strategic Milestones</h2>
          <div className="ap-timeline">
            <div className="ap-timeline-item">
              <div className="ap-timeline-badge">1</div>
              <div className="ap-timeline-content">
                <h4>2019 — The Spark</h4>
                <p>Started as an online localized domestic community initiative dedicated to coordinating stray adoptions.</p>
              </div>
            </div>
            <div className="ap-timeline-item">
              <div className="ap-timeline-badge">2</div>
              <div className="ap-timeline-content">
                <h4>2022 — Services Integration</h4>
                <p>Launched systematic health mapping, tele-clinic diagnostics, and resource validation panels.</p>
              </div>
            </div>
            <div className="ap-timeline-item">
              <div className="ap-timeline-badge">3</div>
              <div className="ap-timeline-content">
                <h4>2026 — Present Ecosystem</h4>
                <p>Provisioning hundreds of diagnostic pipelines across telemetry interfaces and secure digital pet architecture constructs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="ap-section ap-leadership-section">
          <h2 className="ap-center-title">Our Care Leadership</h2>
          <div className="ap-team-grid">
            <div className="ap-team-card">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" alt="Dr. Ananya Sharma" className="ap-team-avatar" />
              <h4>Dr. Ananya Sharma</h4>
              <p className="ap-team-role">Founder & Chief Medical Officer</p>
              <p className="ap-team-bio">A pediatric veterinarian with over 12 years of clinical operations experience.</p>
            </div>
            <div className="ap-team-card">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" alt="Rahul Mishra" className="ap-team-avatar" />
              <h4>Rahul Mishra</h4>
              <p className="ap-team-role">Chief Operations Officer</p>
              <p className="ap-team-bio">Manages digital operations across Pet Paws with prior tracks in tech management.</p>
            </div>
          </div>
        </section>

        {/* Footer Navigation Button */}
        <div className="ap-footer-actions">
  <button 
    className="ap-back-btn" 
    onClick={() => window.location.href = "index.html"} /* Or "/" depending on your setup */
  >
    <span className="ap-btn-arrow">←</span> Return to Homepage
  </button>
</div>

      </main>
    </div>
  );
}