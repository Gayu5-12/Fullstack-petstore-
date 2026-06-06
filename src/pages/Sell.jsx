import React, { useState, useRef } from 'react';
import '../styles/Sell.css';

const Sell = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    breed: '',
    age: '',
    color: '',
    price: '',
    vaccinated: 'yes',
    reason: '',
    images: null,
    documents: null,
    sellerName: '',
    email: '',
    phone: '',
    agreeTerms: false,
  });
  
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files : value
    }));
  };

  const validateStep = () => {
    if (currentStep === 1) {
      return formData.petName && formData.petType && formData.breed && formData.age && formData.color;
    }
    if (currentStep === 2) {
      return formData.vaccinated && formData.price && formData.reason;
    }
    if (currentStep === 3) {
      return formData.sellerName && formData.email && formData.phone && formData.images;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    } else {
      alert("Please fill out all required fields before moving to the next step.");
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions to continue.");
      return;
    }

    alert("✅ Your pet listing has been submitted successfully!\n\nOur team will review your application within 24-48 hours and contact you with next steps. Thank you for choosing PetPaws Shop!");
    
    setCurrentStep(1);
    setFormData({
      petName: '',
      petType: '',
      breed: '',
      age: '',
      color: '',
      price: '',
      vaccinated: 'yes',
      reason: '',
      images: null,
      documents: null,
      sellerName: '',
      email: '',
      phone: '',
      agreeTerms: false,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: 'var(--primary-peach)', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* ====== HERO BANNER ====== */}
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="hero-title mb-3">Find Your Pet's Perfect Home</h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px', opacity: 0.9 }}>
            Share your beloved pet with caring families through PetPaws Shop. 
            We make the process safe, transparent, and rewarding.
          </p>
          <button className="btn-hero" onClick={scrollToForm}>
            <i className="fa-solid fa-heart me-2"></i>Start Listing Your Pet
          </button>
        </div>
      </section>

      {/* ====== INTAKE PIPELINE FORM SECTION ====== */}
      <section className="form-container" ref={formRef}>
        <div className="form-card">
          <h2 className="form-title text-center mb-2">List Your Pet</h2>
          <p className="text-center text-muted mb-4">Complete the steps below to create your pet's listing</p>

          {/* Progress Indicator */}
          <div className="progress-bar-container">
            <div className={`progress-bubble ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''}`}>1</div>
            <div className={`progress-bubble ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''}`}>2</div>
            <div className={`progress-bubble ${currentStep === 3 ? 'active' : currentStep > 3 ? 'completed' : ''}`}>3</div>
            <div className={`progress-bubble ${currentStep === 4 ? 'active' : ''}`}>4</div>
          </div>

          <form onSubmit={handleSubmission}>
            {/* STEP 1: PET DETAILS */}
            {currentStep === 1 && (
              <div className="form-step">
                <h4 className="mb-4"><i className="fa-solid fa-paw me-2" style={{color: 'var(--accent-terracotta)'}}></i>Tell Us About Your Pet</h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Pet Name *</label>
                    <input 
                      type="text" 
                      className="form-control custom-input" 
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      placeholder="e.g., Max" 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Pet Type *</label>
                    <select 
                      className="form-select custom-select" 
                      name="petType"
                      value={formData.petType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Type...</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="rabbit">Rabbit</option>
                      <option value="fish">Fish</option>
                      <option value="hamster">Hamster</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Breed *</label>
                    <input 
                      type="text" 
                      className="form-control custom-input" 
                      name="breed"
                      value={formData.breed}
                      onChange={handleInputChange}
                      placeholder="e.g., Golden Retriever" 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Age *</label>
                    <input 
                      type="text" 
                      className="form-control custom-input" 
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="e.g., 2 years" 
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label fw-bold">Color/Markings *</label>
                    <input 
                      type="text" 
                      className="form-control custom-input" 
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      placeholder="e.g., Golden with white chest" 
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <button type="button" className="btn-pipeline-primary" onClick={handleNext}>
                    Next <i className="fa-solid fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: HEALTH & PRICE */}
            {currentStep === 2 && (
              <div className="form-step">
                <h4 className="mb-4"><i className="fa-solid fa-heart-pulse me-2" style={{color: 'var(--accent-terracotta)'}}></i>Health & Pricing</h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Vaccination Status *</label>
                    <select 
                      className="form-select custom-select" 
                      name="vaccinated"
                      value={formData.vaccinated}
                      onChange={handleInputChange}
                    >
                      <option value="yes">Fully Vaccinated</option>
                      <option value="partial">Partially Vaccinated</option>
                      <option value="no">Not Vaccinated</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Asking Price (₹) *</label>
                    <input 
                      type="number" 
                      className="form-control custom-input" 
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="Enter price in INR" 
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label fw-bold">Why Are You Selling? *</label>
                    <textarea 
                      className="form-control custom-input" 
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Tell buyers why you're selling (relocation, allergies, space constraints, etc.)"
                    ></textarea>
                    <small className="text-muted">This helps potential buyers understand the situation.</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <button type="button" className="btn-pipeline-secondary" onClick={handleBack}>
                    <i className="fa-solid fa-arrow-left me-2"></i>Back
                  </button>
                  <button type="button" className="btn-pipeline-primary" onClick={handleNext}>
                    Next <i className="fa-solid fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: SELLER INFORMATION */}
            {currentStep === 3 && (
              <div className="form-step">
                <h4 className="mb-4"><i className="fa-solid fa-user me-2" style={{color: 'var(--accent-terracotta)'}}></i>Your Information</h4>
                <div className="row g-3">
                  <div className="col-md-12">
                    <label className="form-label fw-bold">Your Name *</label>
                    <input 
                      type="text" 
                      className="form-control custom-input" 
                      name="sellerName"
                      value={formData.sellerName}
                      onChange={handleInputChange}
                      placeholder="Full name" 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Email *</label>
                    <input 
                      type="email" 
                      className="form-control custom-input" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com" 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Phone Number *</label>
                    <input 
                      type="tel" 
                      className="form-control custom-input" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label fw-bold">Pet Images *</label>
                    <input 
                      type="file" 
                      className="form-control custom-input" 
                      name="images"
                      onChange={handleInputChange}
                      accept="image/*" 
                      multiple
                    />
                    <small className="text-muted d-block mt-2">Upload 2-5 clear photos of your pet</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <button type="button" className="btn-pipeline-secondary" onClick={handleBack}>
                    <i className="fa-solid fa-arrow-left me-2"></i>Back
                  </button>
                  <button type="button" className="btn-pipeline-primary" onClick={handleNext}>
                    Next <i className="fa-solid fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: CONFIRMATION */}
            {currentStep === 4 && (
              <div className="form-step">
                <h4 className="mb-4"><i className="fa-solid fa-circle-check me-2" style={{color: 'var(--success-green)'}}></i>Review & Submit</h4>
                
                <div className="p-4 rounded-3 mb-4" style={{ background: 'var(--primary-peach)', border: '1px solid var(--border-color)' }}>
                  <h5 className="mb-3" style={{color: 'var(--dark-chocolate)'}}>Listing Summary</h5>
                  <div className="row g-2">
                    <div className="col-4 text-muted fw-bold">Pet:</div>
                    <div className="col-8">{formData.petName} ({formData.breed})</div>
                    
                    <div className="col-4 text-muted fw-bold">Type:</div>
                    <div className="col-8" style={{ textTransform: 'capitalize' }}>{formData.petType}</div>
                    
                    <div className="col-4 text-muted fw-bold">Age:</div>
                    <div className="col-8">{formData.age}</div>
                    
                    <div className="col-4 text-muted fw-bold">Price:</div>
                    <div className="col-8">₹{formData.price}</div>
                    
                    <div className="col-4 text-muted fw-bold">Vaccinated:</div>
                    <div className="col-8" style={{ textTransform: 'capitalize' }}>{formData.vaccinated}</div>
                  </div>
                </div>

                <div className="form-check mt-4 mb-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="agreeTerms" 
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    style={{ borderColor: 'var(--accent-terracotta)' }}
                  />
                  <label className="form-check-label ms-2" htmlFor="agreeTerms">
                    I confirm that all information provided is accurate and truthful.
                  </label>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button type="button" className="btn-pipeline-secondary" onClick={handleBack}>
                    <i className="fa-solid fa-arrow-left me-2"></i>Back
                  </button>
                  <button type="submit" className="btn-pipeline-primary" style={{ backgroundColor: 'var(--success-green)' }}>
                    <i className="fa-solid fa-check me-2"></i>Submit Listing
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ====== WHY SELL SECTION ====== */}
      <section className="container my-5 pt-4">
        <h2 className="operations-title text-center mb-5">Why Pet Owners Choose to Sell</h2>
        <div className="row g-4">
          {[
            { icon: "fa-house", title: "Relocation", text: "Moving to a new city or country? Find a loving family for your pet while ensuring proper care." },
            { icon: "fa-stethoscope", title: "Health Concerns", text: "Medical conditions? Family allergies? We help match your pet with families better equipped to care." },
            { icon: "fa-building", title: "Space & Lifestyle", text: "Life changes require pet changes. Find homes that match your pet's needs better than yours can." },
            { icon: "fa-users", title: "Family Growth", text: "New baby? Growing family needs? We connect your pet with families ready for them." },
            { icon: "fa-coins", title: "Financial Support", text: "Get fair market value for your pet breed while supporting your family's needs." },
            { icon: "fa-shield-heart", title: "Safe & Secure", text: "Our verified buyer network ensures your pet goes to responsible, loving homes only." }
          ].map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="step-card h-100">
                <div className="step-badge">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h4 className="h5 fw-bold mb-2" style={{color: 'var(--dark-chocolate)'}}>{item.title}</h4>
                <p className="text-muted small mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== SELLER TESTIMONIALS ====== */}
      <section className="container my-5 py-4">
        <h2 className="operations-title text-center mb-5">What Sellers Say</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="step-card">
              <div className="mb-2" style={{color: '#ffc107'}}>★★★★★</div>
              <p className="fst-italic text-secondary">
                "PetPaws made it so easy! I was moving abroad and couldn't take Bella with me. They found her 
                a wonderful family within days. The process was transparent and caring."
              </p>
              <div className="mt-3">
                <strong className="d-block" style={{color: 'var(--dark-chocolate)'}}>Sarah Johnson</strong>
                <small className="text-muted">Sold Golden Retriever • 2 months ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="step-card">
              <div className="mb-2" style={{color: '#ffc107'}}>★★★★★</div>
              <p className="fst-italic text-secondary">
                "I developed severe allergies and had to find a new home for Max. PetPaws was professional,
                empathetic, and helped me stay in touch with Max's new family. Highly recommend!"
              </p>
              <div className="mt-3">
                <strong className="d-block" style={{color: 'var(--dark-chocolate)'}}>David Kumar</strong>
                <small className="text-muted">Sold Siamese Cat • 1 month ago</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="container my-5 pb-4">
        <h2 className="operations-title text-center mb-5">How It Works</h2>
        <div className="row g-4">
          {[
            { step: "01", title: "Submit Listing", text: "Fill out your pet's details and upload photos" },
            { step: "02", title: "We Review", text: "Our team verifies details within 24-48 hours" },
            { step: "03", title: "Get Inquiries", text: "Interested buyers reach out with questions" },
            { step: "04", title: "Complete Sale", text: "Meet buyer & transfer pet safely" }
          ].map((op, i) => (
            <div className="col-md-3 col-sm-6 text-center" key={i}>
              <div className="p-2">
                <div className="step-badge mx-auto mb-3" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                  {op.step}
                </div>
                <h5 className="fw-bold mb-2" style={{color: 'var(--dark-chocolate)'}}>{op.title}</h5>
                <p className="text-muted small">{op.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sell;