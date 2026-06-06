import React, { useState } from "react";
import "../styles/AnimalAbuse.css";

export default function AnimalAbuse() {
  const [reportForm, setReportForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
    animalType: "",
    abuseType: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setReportForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();
    if (!reportForm.name || !reportForm.email || !reportForm.phone || !reportForm.description) {
      alert("Please fill in all required fields");
      return;
    }
    alert("✅ Your report has been submitted. Our team will review it and take action within 24 hours.");
    setReportForm({
      name: "",
      email: "",
      phone: "",
      location: "",
      description: "",
      animalType: "",
      abuseType: "",
    });
  };

  return (
    <div className="abuse-page">
      {/* Hero Section */}
      <section className="abuse-hero">
        <div className="abuse-hero-content">
          <h1>Stop Animal Cruelty</h1>
          <p>Together, we can protect our voiceless friends and create a compassionate world.</p>
        </div>
      </section>

      {/* What is Animal Abuse */}
      <section className="abuse-section">
        <div className="abuse-container">
          <div className="abuse-header">
            <h2>What is Animal Abuse?</h2>
            <div className="abuse-divider"></div>
          </div>
          <div className="abuse-content">
            <p>
              Animal abuse refers to the infliction of unnecessary pain, suffering, or injury to animals. This includes
              physical harm, neglect, confinement, deprivation of food and water, and psychological trauma. Animal abuse
              is not just morally reprehensible—it's illegal in most countries and can indicate serious behavioral issues.
            </p>
            <div className="abuse-highlight">
              <strong>Key Point:</strong> Every animal deserves to be treated with kindness, dignity, and respect.
            </div>
          </div>
        </div>
      </section>

      {/* Types of Abuse */}
      <section className="abuse-section abuse-section-alt">
        <div className="abuse-container">
          <div className="abuse-header">
            <h2>Types of Animal Abuse</h2>
            <div className="abuse-divider"></div>
          </div>
          <div className="abuse-types-grid">
            {[
              {
                icon: "🩹",
                title: "Physical Abuse",
                desc: "Beating, kicking, cutting, burning, or poisoning animals.",
              },
              {
                icon: "🚫",
                title: "Neglect",
                desc: "Failing to provide food, water, shelter, medical care, or social interaction.",
              },
              {
                icon: "🔗",
                title: "Confinement",
                desc: "Keeping animals in cages, chained, or confined without proper space or exercise.",
              },
              {
                icon: "💔",
                title: "Psychological Abuse",
                desc: "Causing fear, stress, or trauma through intimidation and threats.",
              },
              {
                icon: "⚖️",
                title: "Exploitation",
                desc: "Forcing animals to fight, perform dangerous acts, or work excessively.",
              },
              {
                icon: "🏥",
                title: "Medical Neglect",
                desc: "Refusing necessary veterinary care or medication for sick/injured animals.",
              },
            ].map((type, idx) => (
              <div className="abuse-type-card" key={idx}>
                <div className="abuse-type-icon">{type.icon}</div>
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="abuse-section">
        <div className="abuse-container">
          <div className="abuse-header">
            <h2>Warning Signs of Animal Abuse</h2>
            <div className="abuse-divider"></div>
          </div>
          <div className="abuse-signs-grid">
            <div className="abuse-sign-item">
              <div className="abuse-sign-icon">🩹</div>
              <h4>Physical Symptoms</h4>
              <ul>
                <li>Unexplained injuries, scars, or burns</li>
                <li>Missing fur or hair patches</li>
                <li>Broken bones or limping</li>
                <li>Malnourishment or extreme weight loss</li>
              </ul>
            </div>
            <div className="abuse-sign-item">
              <div className="abuse-sign-icon">😨</div>
              <h4>Behavioral Changes</h4>
              <ul>
                <li>Excessive fear or aggression</li>
                <li>Flinching when touched</li>
                <li>Withdrawal or lethargy</li>
                <li>Unusual nervousness or paranoia</li>
              </ul>
            </div>
            <div className="abuse-sign-item">
              <div className="abuse-sign-icon">🏠</div>
              <h4>Living Conditions</h4>
              <ul>
                <li>Living in filth or overcrowded spaces</li>
                <li>No access to clean water or food</li>
                <li>Extreme heat or cold exposure</li>
                <li>Lack of shelter or bedding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rescue Stories */}
      <section className="abuse-section abuse-section-alt">
        <div className="abuse-container">
          <div className="abuse-header">
            <h2>Rescue Stories</h2>
            <div className="abuse-divider"></div>
          </div>
          <div className="abuse-stories-grid">
            {[
              {
                title: "Lucky – From Chains to Freedom",
                story:
                  "Lucky, a golden retriever, was found chained in a yard for 3 years without proper food or water. After rescue and rehabilitation, he now thrives in a loving home and serves as an emotional support animal.",
              },
              {
                title: "Bella – Surviving Severe Neglect",
                story:
                  "Bella was discovered in a cage weighing only 8 lbs at 5 years old. With proper nutrition and medical care, she recovered and became a therapy animal helping other rescued pets.",
              },
              {
                title: "Max – Fighting Ring Survivor",
                story:
                  "Max was rescued from an illegal animal fighting ring with severe wounds. After months of treatment, he learned to trust again and now lives peacefully with a dedicated family.",
              },
            ].map((story, idx) => (
              <div className="abuse-story-card" key={idx}>
                <h3>{story.title}</h3>
                <p>{story.story}</p>
                <div className="story-badge">✅ Recovery Success</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="abuse-section">
        <div className="abuse-container">
          <div className="abuse-header">
            <h2>How You Can Help</h2>
            <div className="abuse-divider"></div>
          </div>
          <div className="abuse-help-grid">
            {[
              {
                number: "1",
                title: "Report Abuse",
                desc: "If you witness animal abuse, report it immediately to local authorities or animal protection organizations.",
              },
              {
                number: "2",
                title: "Volunteer",
                desc: "Dedicate your time to animal shelters, rescue centers, and sanctuary organizations.",
              },
              {
                number: "3",
                title: "Adopt & Spread Awareness",
                desc: "Adopt from shelters and educate others about responsible pet ownership and animal welfare.",
              },
              {
                number: "4",
                title: "Donate",
                desc: "Financial contributions help rescue operations, medical care, and rehabilitation programs.",
              },
              {
                number: "5",
                title: "Support Legislation",
                desc: "Advocate for stronger animal protection laws and policies in your community.",
              },
              {
                number: "6",
                title: "Educate Others",
                desc: "Share information about animal rights and encourage compassionate treatment of all living beings.",
              },
            ].map((help, idx) => (
              <div className="abuse-help-card" key={idx}>
                <div className="help-number">{help.number}</div>
                <h3>{help.title}</h3>
                <p>{help.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Abuse Form */}
      <section className="abuse-section abuse-section-alt">
        <div className="abuse-container abuse-container-narrow">
          <div className="abuse-header">
            <h2>Report Animal Abuse</h2>
            <div className="abuse-divider"></div>
            <p style={{ marginTop: "1rem", color: "#7A6258", fontSize: "0.95rem" }}>
              Your report is confidential and will be handled with urgency. Please provide as much detail as possible.
            </p>
          </div>
          <form className="abuse-report-form" onSubmit={handleSubmitReport}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  value={reportForm.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={reportForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={reportForm.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  placeholder="City, District"
                  value={reportForm.location}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="animalType">Type of Animal</label>
                <select id="animalType" value={reportForm.animalType} onChange={handleInputChange}>
                  <option value="">Select an animal type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="livestock">Livestock</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="abuseType">Type of Abuse</label>
                <select id="abuseType" value={reportForm.abuseType} onChange={handleInputChange}>
                  <option value="">Select abuse type</option>
                  <option value="physical">Physical Abuse</option>
                  <option value="neglect">Neglect</option>
                  <option value="confinement">Confinement</option>
                  <option value="exploitation">Exploitation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description of Abuse *</label>
              <textarea
                id="description"
                placeholder="Please describe what you witnessed in detail..."
                rows="6"
                value={reportForm.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="abuse-submit-btn">
              <i className="fa-solid fa-paper-plane"></i> Submit Report
            </button>
          </form>
        </div>
      </section>

      {/* Animal Welfare Organizations */}
      <section className="abuse-section">
        <div className="abuse-container">
          <div className="abuse-header">
            <h2>Report to Animal Welfare Organizations</h2>
            <div className="abuse-divider"></div>
          </div>
          <div className="abuse-orgs-grid">
            {[
              {
                name: "Animal Welfare Board of India",
                contact: "011-4141-5555",
                email: "awbi@animalwelfareboard.org",
                desc: "Official government organization for animal protection",
              },
              {
                name: "PETA India",
                contact: "080-4141-4444",
                email: "info@petaindia.com",
                desc: "People for the Ethical Treatment of Animals",
              },
              {
                name: "World Animal Protection",
                contact: "Global Hotline",
                email: "report@worldanimalprotection.org",
                desc: "International organization for animal safety",
              },
              {
                name: "Local Police (Animal Cruelty Division)",
                contact: "100 (Emergency)",
                email: "animalcruelty@police.gov",
                desc: "Report to your nearest police station",
              },
            ].map((org, idx) => (
              <div className="abuse-org-card" key={idx}>
                <h3>{org.name}</h3>
                <p>{org.desc}</p>
                <div className="org-contact">
                  <div>
                    <strong>Phone:</strong> {org.contact}
                  </div>
                  <div>
                    <strong>Email:</strong> {org.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="abuse-cta">
        <div className="abuse-container">
          <h2>Together, We Can Make a Difference</h2>
          <p>Every voice matters. Every action counts. Join us in creating a world where animals are safe, respected, and loved.</p>
          <div className="abuse-cta-buttons">
            <button className="cta-btn cta-btn-primary" onClick={() => alert("Opening adoption page...")}>
              🐾 Adopt a Rescued Pet
            </button>
            <button className="cta-btn cta-btn-secondary" onClick={() => alert("Opening volunteer opportunities...")}>
              ❤️ Volunteer With Us
            </button>
            <button className="cta-btn cta-btn-secondary" onClick={() => alert("Opening donation page...")}>
              💝 Make a Donation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
