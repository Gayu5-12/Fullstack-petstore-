import React from "react";
import "../styles/PetVaccination.css";

export default function PetVaccination() {
  return (
    <div className="vaccination-page">
      {/* Hero Section */}
      <section className="vac-hero">
        <div className="vac-hero-content">
          <h1>Pet Vaccination Guide</h1>
          <p>Keep your beloved pets healthy and protected with proper vaccination schedules</p>
        </div>
      </section>

      {/* Why Vaccinate */}
      <section className="vac-section">
        <div className="vac-container">
          <h2>Why Vaccinations Matter</h2>
          <div className="vac-grid">
            {[
              {
                icon: "🛡️",
                title: "Disease Prevention",
                desc: "Vaccines protect against serious, life-threatening diseases like rabies, distemper, and parvovirus.",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Community Health",
                desc: "Vaccinated pets reduce disease transmission to other animals and humans.",
              },
              {
                icon: "💰",
                title: "Cost-Effective",
                desc: "Prevention is always cheaper than treating serious illnesses and emergencies.",
              },
              {
                icon: "😊",
                title: "Peace of Mind",
                desc: "Know your pet is protected against preventable diseases.",
              },
            ].map((item, idx) => (
              <div className="vac-card" key={idx}>
                <div className="vac-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccination Schedule */}
      <section className="vac-section vac-section-alt">
        <div className="vac-container">
          <h2>Vaccination Schedule for Dogs</h2>
          <div className="vac-table-wrapper">
            <table className="vac-table">
              <thead>
                <tr>
                  <th>Age</th>
                  <th>Vaccines</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6-8 weeks</td>
                  <td>DHPP (Distemper, Hepatitis, Parvo, Parainfluenza)</td>
                  <td>Initial protection against core diseases</td>
                </tr>
                <tr>
                  <td>10-12 weeks</td>
                  <td>DHPP Booster + Rabies</td>
                  <td>Strengthen immunity, prevent rabies</td>
                </tr>
                <tr>
                  <td>14-16 weeks</td>
                  <td>DHPP Booster + Rabies Booster</td>
                  <td>Final primary series dose</td>
                </tr>
                <tr>
                  <td>1 year</td>
                  <td>DHPP + Rabies (Annual booster)</td>
                  <td>Maintain protection</td>
                </tr>
                <tr>
                  <td>Every 3 years</td>
                  <td>DHPP + Rabies</td>
                  <td>Ongoing protection throughout life</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cat Vaccination Schedule */}
      <section className="vac-section">
        <div className="vac-container">
          <h2>Vaccination Schedule for Cats</h2>
          <div className="vac-table-wrapper">
            <table className="vac-table">
              <thead>
                <tr>
                  <th>Age</th>
                  <th>Vaccines</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6-8 weeks</td>
                  <td>FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)</td>
                  <td>Initial protection against core feline diseases</td>
                </tr>
                <tr>
                  <td>10-12 weeks</td>
                  <td>FVRCP Booster + Rabies</td>
                  <td>Strengthen immunity, prevent rabies</td>
                </tr>
                <tr>
                  <td>14-16 weeks</td>
                  <td>FVRCP Booster + Rabies Booster</td>
                  <td>Final primary series dose</td>
                </tr>
                <tr>
                  <td>1 year</td>
                  <td>FVRCP + Rabies (Annual booster)</td>
                  <td>Maintain protection</td>
                </tr>
                <tr>
                  <td>Every 3 years</td>
                  <td>FVRCP + Rabies</td>
                  <td>Ongoing protection throughout life</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Common Vaccines */}
      <section className="vac-section vac-section-alt">
        <div className="vac-container">
          <h2>Common Pet Vaccines Explained</h2>
          <div className="vaccine-details">
            {[
              {
                name: "Rabies",
                importance: "Core (Essential)",
                desc: "Prevents the deadly rabies virus. Required by law in most countries.",
              },
              {
                name: "DHPP (Dogs)",
                importance: "Core",
                desc: "Protects against Distemper, Hepatitis, Parvo, and Parainfluenza—serious, potentially fatal diseases.",
              },
              {
                name: "FVRCP (Cats)",
                importance: "Core",
                desc: "Protects against Feline Viral Rhinotracheitis, Calicivirus, and Panleukopenia.",
              },
              {
                name: "Bordetella (Kennel Cough)",
                importance: "Non-core",
                desc: "Recommended if your dog frequents boarding facilities or dog parks.",
              },
              {
                name: "Leukemia (Cats)",
                importance: "Non-core",
                desc: "Recommended for outdoor cats or those exposed to other felines.",
              },
              {
                name: "Lyme Disease",
                importance: "Non-core",
                desc: "For dogs in areas with high tick populations.",
              },
            ].map((vaccine, idx) => (
              <div className="vaccine-item" key={idx}>
                <div className="vaccine-header">
                  <h3>{vaccine.name}</h3>
                  <span className="vaccine-badge">{vaccine.importance}</span>
                </div>
                <p>{vaccine.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccination Tips */}
      <section className="vac-section">
        <div className="vac-container">
          <h2>Vaccination Tips & Aftercare</h2>
          <div className="tips-grid">
            {[
              {
                icon: "📋",
                title: "Keep Records",
                tips: [
                  "Maintain vaccination records",
                  "Schedule boosters on time",
                  "Carry records to travel/boarding",
                ],
              },
              {
                icon: "🔍",
                title: "Check with Your Vet",
                tips: [
                  "Discuss lifestyle & risk factors",
                  "Ask about non-core vaccines",
                  "Plan vaccination timeline",
                ],
              },
              {
                icon: "⚠️",
                title: "Monitor After Vaccination",
                tips: [
                  "Mild lethargy is normal",
                  "Watch for allergic reactions",
                  "Contact vet if concerned",
                ],
              },
            ].map((section, idx) => (
              <div className="tips-card" key={idx}>
                <div className="tips-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <ul>
                  {section.tips.map((tip, tidx) => (
                    <li key={tidx}>{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vac-section vac-section-alt">
        <div className="vac-container">
          <h2>Frequently Asked Questions</h2>
          <div className="vac-faq">
            {[
              {
                q: "When should I start vaccinating my puppy/kitten?",
                a: "Vaccinations should begin at 6-8 weeks of age. Follow your veterinarian's recommended schedule for optimal protection.",
              },
              {
                q: "Are vaccines safe?",
                a: "Yes, vaccines are very safe. Serious side effects are rare. Benefits far outweigh minimal risks.",
              },
              {
                q: "Can adult pets be vaccinated?",
                a: "Absolutely! Unvaccinated adult pets can be vaccinated with their vet's guidance.",
              },
              {
                q: "Do vaccines need to be repeated?",
                a: "Yes, booster shots are needed. Most vaccines require annual or every 3-year boosters.",
              },
              {
                q: "What if my pet has adverse reactions?",
                a: "Contact your vet immediately. Severe reactions are rare but require prompt medical attention.",
              },
            ].map((item, idx) => (
              <div className="faq-item" key={idx}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="vac-cta">
        <h2>Schedule a Vaccination Appointment Today</h2>
        <p>Talk to your veterinarian about the best vaccination plan for your pet</p>
        <button className="vac-cta-btn">📞 Find a Vet Near You</button>
      </section>
    </div>
  );
}
