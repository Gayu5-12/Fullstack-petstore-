import React, { useState } from "react";
import "../styles/PetNutrition.css";

export default function PetNutrition() {
  const [selectedPet, setSelectedPet] = useState("dog");

  return (
    <div className="nutrition-page">
      {/* Hero Section */}
      <section className="nut-hero">
        <div className="nut-hero-content">
          <h1>Pet Nutrition & Diet Plans</h1>
          <p>Provide optimal nutrition for your pet's health, energy, and longevity</p>
        </div>
      </section>

      {/* Why Nutrition Matters */}
      <section className="nut-section">
        <div className="nut-container">
          <h2>Why Proper Nutrition Matters</h2>
          <div className="nut-grid">
            {[
              {
                icon: "💪",
                title: "Strong Immune System",
                desc: "Balanced nutrition strengthens immunity against diseases and infections.",
              },
              {
                icon: "✨",
                title: "Healthy Coat & Skin",
                desc: "Quality protein and omega acids result in a shiny, healthy coat.",
              },
              {
                icon: "⚡",
                title: "Energy & Vitality",
                desc: "Proper calories and nutrients keep your pet active and playful.",
              },
              {
                icon: "🧠",
                title: "Brain Development",
                desc: "Essential nutrients support cognitive function and mental health.",
              },
            ].map((item, idx) => (
              <div className="nut-card" key={idx}>
                <div className="nut-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Nutrients */}
      <section className="nut-section nut-section-alt">
        <div className="nut-container">
          <h2>Essential Nutrients for Pets</h2>
          <div className="nutrients-grid">
            {[
              {
                name: "Protein",
                importance: "Essential",
                sources: "Chicken, beef, fish, eggs, dairy",
                role: "Builds & repairs muscles, tissues, and organs",
              },
              {
                name: "Fats",
                importance: "Essential",
                sources: "Fish oil, chicken fat, coconut oil",
                role: "Provides energy and supports skin/coat health",
              },
              {
                name: "Carbohydrates",
                importance: "Important",
                sources: "Brown rice, oats, sweet potatoes, vegetables",
                role: "Provides energy and supports digestive health",
              },
              {
                name: "Vitamins & Minerals",
                importance: "Essential",
                sources: "Fruits, vegetables, fortified foods",
                role: "Supports immunity, bone health, and overall function",
              },
              {
                name: "Fiber",
                importance: "Important",
                sources: "Vegetables, whole grains, legumes",
                role: "Aids digestion and maintains healthy gut",
              },
              {
                name: "Water",
                importance: "Essential",
                sources: "Fresh, clean water always available",
                role: "Regulates body temperature and supports all functions",
              },
            ].map((nutrient, idx) => (
              <div className="nutrient-card" key={idx}>
                <div className="nutrient-header">
                  <h3>{nutrient.name}</h3>
                  <span className="nutrient-badge">{nutrient.importance}</span>
                </div>
                <div className="nutrient-body">
                  <p>
                    <strong>Sources:</strong> {nutrient.sources}
                  </p>
                  <p>
                    <strong>Role:</strong> {nutrient.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet-Specific Diet Plans */}
      <section className="nut-section">
        <div className="nut-container">
          <h2>Pet-Specific Feeding Guides</h2>

          <div className="diet-selector">
            <button
              className={`diet-btn ${selectedPet === "dog" ? "active" : ""}`}
              onClick={() => setSelectedPet("dog")}
            >
              🐕 Dogs
            </button>
            <button
              className={`diet-btn ${selectedPet === "cat" ? "active" : ""}`}
              onClick={() => setSelectedPet("cat")}
            >
              🐱 Cats
            </button>
            <button
              className={`diet-btn ${selectedPet === "bird" ? "active" : ""}`}
              onClick={() => setSelectedPet("bird")}
            >
              🦜 Birds
            </button>
            <button
              className={`diet-btn ${selectedPet === "rabbit" ? "active" : ""}`}
              onClick={() => setSelectedPet("rabbit")}
            >
              🐰 Rabbits
            </button>
          </div>

          {selectedPet === "dog" && (
            <div className="diet-plan">
              <h3>Dog Nutrition Guide</h3>
              <div className="diet-grid">
                <div className="diet-card">
                  <h4>🍖 Primary Foods</h4>
                  <ul>
                    <li>High-quality dog food (50-60% of diet)</li>
                    <li>Lean meats: chicken, beef, fish</li>
                    <li>Eggs (2-3 per week)</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>🥕 Vegetables & Fruits</h4>
                  <ul>
                    <li>Carrots, green beans, pumpkin</li>
                    <li>Apples, blueberries, watermelon</li>
                    <li>Sweet potatoes, broccoli</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>📊 Daily Calorie Intake</h4>
                  <ul>
                    <li>Small dogs (5-10 kg): 200-500 cal/day</li>
                    <li>Medium dogs (10-25 kg): 500-1200 cal/day</li>
                    <li>Large dogs (25+ kg): 1200-2500+ cal/day</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>⏰ Feeding Schedule</h4>
                  <ul>
                    <li>Puppies: 3-4 meals per day</li>
                    <li>Adult dogs: 1-2 meals per day</li>
                    <li>Senior dogs: 2 meals per day</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedPet === "cat" && (
            <div className="diet-plan">
              <h3>Cat Nutrition Guide</h3>
              <div className="diet-grid">
                <div className="diet-card">
                  <h4>🍖 Primary Foods</h4>
                  <ul>
                    <li>High-quality cat food (main diet)</li>
                    <li>Lean meats: chicken, turkey, fish</li>
                    <li>Eggs (occasionally)</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>🥕 Safe Vegetables</h4>
                  <ul>
                    <li>Cooked carrots, peas</li>
                    <li>Small amounts of cooked pumpkin</li>
                    <li>Avoid: Onions, garlic, chocolate</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>📊 Daily Calorie Intake</h4>
                  <ul>
                    <li>Kittens: 200-250 cal/day</li>
                    <li>Adult cats: 200-250 cal/day</li>
                    <li>Senior cats: 150-200 cal/day</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>⏰ Feeding Schedule</h4>
                  <ul>
                    <li>Kittens: 3-4 meals per day</li>
                    <li>Adult cats: 2 meals per day</li>
                    <li>Senior cats: 2-3 small meals/day</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedPet === "bird" && (
            <div className="diet-plan">
              <h3>Bird Nutrition Guide</h3>
              <div className="diet-grid">
                <div className="diet-card">
                  <h4>🌾 Primary Foods</h4>
                  <ul>
                    <li>High-quality pellets (primary diet)</li>
                    <li>Mixed seeds in moderation</li>
                    <li>Fresh fruits daily</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>🥕 Vegetables & Fruits</h4>
                  <ul>
                    <li>Leafy greens, carrots, bell peppers</li>
                    <li>Apples, bananas, berries</li>
                    <li>Avoid: Avocado, chocolate, salt</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>💧 Water</h4>
                  <ul>
                    <li>Fresh water daily (change frequently)</li>
                    <li>Water bowl cleaned regularly</li>
                    <li>Prevent water contamination</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>⏰ Feeding Schedule</h4>
                  <ul>
                    <li>Once daily (morning preferred)</li>
                    <li>Remove uneaten food after 4 hours</li>
                    <li>Treats occasionally</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedPet === "rabbit" && (
            <div className="diet-plan">
              <h3>Rabbit Nutrition Guide</h3>
              <div className="diet-grid">
                <div className="diet-card">
                  <h4>🌾 Primary Foods</h4>
                  <ul>
                    <li>Unlimited hay (75% of diet)</li>
                    <li>Fresh vegetables daily</li>
                    <li>Limited pellets (1-2 cups/day)</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>🥕 Vegetables</h4>
                  <ul>
                    <li>Leafy greens, lettuce, spinach</li>
                    <li>Carrots, broccoli, bell peppers</li>
                    <li>Avoid: Iceberg lettuce, onions</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>🍎 Treats</h4>
                  <ul>
                    <li>Fruits (apple, banana) occasionally</li>
                    <li>Timothy hay treats</li>
                    <li>Limit treats to 10% of diet</li>
                  </ul>
                </div>
                <div className="diet-card">
                  <h4>⏰ Feeding Schedule</h4>
                  <ul>
                    <li>Unlimited hay always available</li>
                    <li>Fresh vegetables 2 times daily</li>
                    <li>Pellets once daily</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Feeding Tips */}
      <section className="nut-section nut-section-alt">
        <div className="nut-container">
          <h2>Feeding Tips & Best Practices</h2>
          <div className="tips-list">
            {[
              "🚫 Avoid toxic foods: chocolate, grapes, onions, avocado, xylitol",
              "⏱️ Establish consistent feeding times for routine and digestion",
              "🥗 Introduce new foods gradually to avoid digestive upset",
              "📏 Monitor portion sizes to maintain healthy weight",
              "💧 Always provide fresh, clean water",
              "🎂 Limit treats to 10% of daily calorie intake",
              "🏥 Consult your vet before major diet changes",
              "⚖️ Regular weight checks prevent obesity-related issues",
            ].map((tip, idx) => (
              <div className="tip-item" key={idx}>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nut-cta">
        <h2>Consult a Veterinary Nutritionist</h2>
        <p>Every pet is unique. Get personalized nutrition advice from professionals</p>
        <button className="nut-cta-btn">📞 Schedule a Nutrition Consultation</button>
      </section>
    </div>
  );
}
