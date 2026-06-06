import React, { useState } from "react";
import "../styles/Page.css";

export default function PetCare() {
  const [expandedService, setExpandedService] = useState(null);
  const [activeGuidelineView, setActiveGuidelineView] = useState(null); // stores service object when "Learn More" is clicked
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingTarget, setBookingTarget] = useState(null);

  // Chatbox Simulation State Engine
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "trainer", text: "Hello! I am your assigned Pet Care Consultant. Feel free to ask any operational doubts regarding this care routine!" }
  ]);

  // Appointment Form State Engine
  const [serviceAppointment, setServiceAppointment] = useState({
    petName: "", petType: "Dog", clientName: "", contact: "", date: "", time: "", branch: "Chennai (Adyar Hub)"
  });

  const services = [
    {
      id: 1,
      title: "Veterinary Care",
      icon: "🏥",
      price: "₹500 - ₹2000 per visit",
      description: "Professional veterinary consultation and treatment",
      details: ["Regular health checkups", "Vaccination & immunization", "Surgery & anesthesia", "Dental care", "Laboratory testing", "Emergency care 24/7"],
      duration: "30-60 minutes per session",
      guidelines: "Keep your pet on a secure leash or inside a structural carrier crate. Bring all previous operational vaccination card historical indices. Fast your pet for at least 4 hours if blood profiles are scheduled."
    },
    {
      id: 2,
      title: "Pet Grooming",
      icon: "✂️",
      price: "₹300 - ₹1500 per session",
      description: "Professional grooming and hygiene services",
      details: ["Bathing & shampoo", "Hair cutting & styling", "Nail trimming", "Ear & eye cleaning", "Fur detangling", "Perfume & fragrance"],
      duration: "45-90 minutes per session",
      guidelines: "Inform our stylist of skin allergies or active hotspot wounds beforehand. Ensure your pet has relieved themselves prior to the session to avoid styling anxiety cycles."
    },
    {
      id: 3,
      title: "Pet Walking",
      icon: "🚶",
      price: "₹150 - ₹500 per walk",
      description: "Regular exercise and outdoor activities",
      details: ["Daily morning & evening walks", "Off-leash play time", "Socialization with other pets", "Exercise routines", "Park & nature visits", "Temperature-controlled walks"],
      duration: "30-45 minutes per walk",
      guidelines: "Provide your preferred specialized body harness setup. Specify trigger parameters like high aggression toward specific birds or street vehicles to help our handlers navigate routes safely."
    },
    {
      id: 4,
      title: "Pet Sitting",
      icon: "🪑",
      price: "₹200 - ₹1000 per day",
      description: "In-home pet care while you're away",
      details: ["Feeding & water management", "Playtime & companionship", "Medication administration", "Waste management", "House monitoring", "Daily updates & photos"],
      duration: "1-2 hours per visit",
      guidelines: "Securely lock tracking areas containing household chemicals. Leave explicit measurement cups alongside feeding instructions and mark emergency medical contact points prominently."
    },
    {
      id: 5,
      title: "Pet Training",
      icon: "🎓",
      price: "₹1000 - ₹5000 per program",
      description: "Professional behavior training programs",
      details: ["Obedience training", "Puppy kindergarten", "Behavioral modification", "Agility training", "Trick training", "One-on-one coaching"],
      duration: "4-8 weeks program",
      guidelines: "Do not feed your pet a heavy meal before the session—hunger increases training treat motivation! Consistency is key: human family members must follow the exact same command keywords."
    },
    {
      id: 6,
      title: "Breeding Services",
      icon: "👪",
      price: "₹5000 - ₹50000 per program",
      description: "Professional breeding consultation & facilitation",
      details: ["Breed selection consultation", "Health screening & testing", "Genetic counseling", "Breeding pair matching", "Pregnancy management", "Puppy/kitten care support"],
      duration: "Ongoing support",
      guidelines: "Ensure both target mating profiles hold clear genetic screening certification clearing common congenital defects. Provide updated kennel club tracking data slips if matching validation is requested."
    }
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const handleLaunchBooking = (e, service) => {
    e.stopPropagation(); // prevent card collapse collapse toggle
    setBookingTarget(service);
    setShowBookingModal(true);
  };

  const handleLaunchGuidelines = (e, service) => {
    e.stopPropagation();
    setActiveGuidelineView(service);
    // Reset conversation logic state for new view contexts
    setChatMessages([
      { sender: "trainer", text: `Welcome! Do you have any operational questions regarding our ${service.title} protocols or specific setup preparations?` }
    ]);
  };

  const handleDispatchBooking = (e) => {
    e.preventDefault();
    if (!serviceAppointment.petName || !serviceAppointment.clientName || !serviceAppointment.date || !serviceAppointment.time) {
      alert("Please enter the critical operational fields to map the booking slot structure.");
      return;
    }
    alert(`🎉 Service Ticket Generated!\n\nService: ${bookingTarget.title}\nAppointment Date: ${serviceAppointment.date} at ${serviceAppointment.time}\nLocation Hub: ${serviceAppointment.branch}\n\nOur specialists look forward to seeing you and ${serviceAppointment.petName}!`);
    setShowBookingModal(false);
    setServiceAppointment({ petName: "", petType: "Dog", clientName: "", contact: "", date: "", time: "", branch: "Chennai (Adyar Hub)" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = { sender: "user", text: chatInput };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");

    // Simulate Expert Behavior Trainer reply timeline
    setTimeout(() => {
      const expertReply = {
        sender: "trainer",
        text: `Understood your query regarding "${userMsg.text}". Our processing specialist will evaluate your pet's configuration guidelines at the hub. Is there anything else we should log?`
      };
      setChatMessages((prev) => [...prev, expertReply]);
    }, 1000);
  };

  return (
    <main className="petcare-page" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "20px 0" }}>
      
      {/* ====== VIEW PANEL: COMPONENT MAIN GRID ====== */}
      {!activeGuidelineView ? (
        <div className="container">
          <section className="petcare-hero text-center bg-dark text-white p-5 rounded-4 mb-5 shadow-sm" style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&q=80') center/cover" }}>
            <h1 className="display-4 fw-bold">Premium Pet Care Workspace</h1>
            <p className="lead">Professional setups, medical frameworks, and specialized training networks</p>
          </section>

          <section className="petcare-services-section">
            <div className="text-center mb-5">
              <h2 className="fw-bold text-dark">Our Structural Care Modules</h2>
              <p className="text-muted">Expand individual system entries to initialize direct consultations or view preparation criteria.</p>
            </div>

            <div className="row g-4">
              {services.map((service) => (
                <div key={service.id} className="col-md-6 col-lg-4">
                  <div 
                    className={`card h-100 shadow-sm border-0 rounded-4 p-3 transition-all ${expandedService === service.id ? 'border-primary' : ''}`}
                    style={{ cursor: "pointer", transition: "transform 0.2s" }}
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span style={{ fontSize: "2.5rem" }}>{service.icon}</span>
                        <span className="badge bg-light text-dark border p-2">{service.price.split(' ')[0]}</span>
                      </div>
                      
                      <h4 className="fw-bold text-dark mb-1">{service.title}</h4>
                      <p className="text-muted small mb-3">{service.description}</p>
                      
                      <div className="text-primary small fw-bold mb-2">
                        {expandedService === service.id ? "Collapse Matrix −" : "Expand Infrastructure +"}
                      </div>

                      {expandedService === service.id && (
                        <div className="mt-3 pt-3 border-top">
                          <h6 className="fw-bold text-secondary mb-2">Included In Action Item:</h6>
                          <ul className="list-unstyled mb-3">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="small text-muted mb-1">
                                <i className="fa-solid fa-circle-check text-success me-2"></i> {detail}
                              </li>
                            ))}
                          </ul>
                          <p className="small text-dark mb-3"><strong>Target Span:</strong> {service.duration}</p>
                          
                          <div className="d-flex gap-2">
                            <button className="btn btn-warning flex-grow-1 fw-bold text-dark" onClick={(e) => handleLaunchBooking(e, service)}>
                              <i className="fa-regular fa-calendar-plus me-1"></i> Book Now
                            </button>
                            <button className="btn btn-outline-secondary flex-grow-1" onClick={(e) => handleLaunchGuidelines(e, service)}>
                              <i className="fa-solid fa-book-open me-1"></i> Learn More
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        /* ====== VIEW PANEL: ISOLATED GUIDELINES & LIVE CONSULTATION ====== */
        <div className="container py-3">
          <button className="btn btn-sm btn-outline-secondary mb-4 shadow-sm" onClick={() => setActiveGuidelineView(null)}>
            <i className="fa-solid fa-arrow-left-long me-2"></i> Return to Care Workspace
          </button>

          <div className="row g-4">
            {/* Left Frame Component: Service Criteria Information */}
            <div className="col-lg-7">
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <span style={{ fontSize: "3rem" }}>{activeGuidelineView.icon}</span>
                  <div>
                    <h2 className="fw-bold text-dark mb-0">{activeGuidelineView.title} Preparation Protocols</h2>
                    <p className="text-muted mb-0">Official procedural rules curated by active store handlers</p>
                  </div>
                </div>

                <div className="alert alert-warning border-0 p-3 rounded-3 mb-4">
                  <h5 className="fw-bold text-dark mb-2"><i className="fa-solid fa-triangle-exclamation me-2"></i>Required Setup Guidelines</h5>
                  <p className="mb-0 text-dark" style={{ lineHeight: "1.6" }}>{activeGuidelineView.guidelines}</p>
                </div>

                <h5 className="fw-bold mb-3 text-secondary">Operational Scope Checklists</h5>
                <div className="row g-2">
                  {activeGuidelineView.details.map((item, idx) => (
                    <div key={idx} className="col-sm-6">
                      <div className="bg-light p-3 rounded-3 border-start border-warning border-3 h-100 small text-dark fw-medium">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="btn btn-warning w-100 fw-bold py-3 mt-4" onClick={(e) => handleLaunchBooking(e, activeGuidelineView)}>
                  Initialize Active Appointment for {activeGuidelineView.title}
                </button>
              </div>
            </div>

            {/* Right Frame Component: Dynamic Doubts Clarification Chatbox */}
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow-sm d-flex flex-column" style={{ height: "550px" }}>
                <div className="p-3 border-bottom bg-dark text-white rounded-top-4 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-success rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                    <div>
                      <h6 className="fw-bold mb-0">Trainer Consultation Link</h6>
                      <small className="text-muted" style={{fontSize: "0.75rem"}}>Active Store Specialist On-Duty</small>
                    </div>
                  </div>
                  <i className="fa-solid fa-user-tie text-warning fs-4"></i>
                </div>

                {/* Messages Display Hub Container */}
                <div className="flex-grow-1 p-3 overflow-auto bg-light" style={{ maxHeight: "400px" }}>
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`d-flex mb-3 ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
                      <div 
                        className={`p-3 rounded-3 shadow-sm max-width-75 small ${msg.sender === "user" ? "bg-warning text-dark rounded-end-0" : "bg-white text-dark rounded-start-0"}`}
                        style={{ maxWidth: "85%", lineHeight: "1.4" }}
                      >
                        <strong>{msg.sender === "user" ? "You" : "Specialist Consultant"}:</strong>
                        <p className="mb-0 mt-1">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Interactive Input Strip Footer */}
                <form onSubmit={handleSendMessage} className="p-3 border-top bg-white rounded-bottom-4 d-flex gap-2">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Type alignment doubts (e.g., diet constraints, age logs)..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                  />
                  <button type="submit" className="btn btn-dark px-3">
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====== GLOBAL SERVICE APPOINTMENT MODAL DISPATCHER ====== */}
      {showBookingModal && bookingTarget && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 shadow">
              <div className="modal-header bg-dark text-white rounded-top-4">
                <h5 className="modal-title fw-bold">Schedule {bookingTarget.title}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowBookingModal(false)}></button>
              </div>
              <form onSubmit={handleDispatchBooking}>
                <div className="modal-body p-4">
                  <div className="bg-light p-3 rounded-3 mb-3 text-center small text-muted">
                    Selected Category Index: <strong>{bookingTarget.title}</strong> | Matrix Rate: {bookingTarget.price}
                  </div>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Pet Companion Name</label>
                      <input type="text" className="form-control" placeholder="Biscuit / Milo" value={serviceAppointment.petName} onChange={(e) => setServiceAppointment({...serviceAppointment, petName: e.target.value})} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Pet Category Classification</label>
                      <select className="form-select" value={serviceAppointment.petType} onChange={(e) => setServiceAppointment({...serviceAppointment, petType: e.target.value})}>
                        <option value="Dog">Dog Pedigree</option>
                        <option value="Cat">Cat Profile</option>
                        <option value="Bird">Avian Specimen</option>
                        <option value="Rabbit">Lagomorph Breed</option>
                        <option value="Fish">Aquatic Entry</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-bold text-muted">Client Guardian Full Name</label>
                      <input type="text" className="form-control" placeholder="Enter owner identification label" value={serviceAppointment.clientName} onChange={(e) => setServiceAppointment({...serviceAppointment, clientName: e.target.value})} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Target Strategy Date</label>
                      <input type="date" className="form-control" value={serviceAppointment.date} onChange={(e) => setServiceAppointment({...serviceAppointment, date: e.target.value})} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Arrival Timestamp</label>
                      <input type="time" className="form-control" value={serviceAppointment.time} onChange={(e) => setServiceAppointment({...serviceAppointment, time: e.target.value})} required />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-bold text-muted">Target Tamilnadu Medical Hub Branch</label>
                      <select className="form-select" value={serviceAppointment.branch} onChange={(e) => setServiceAppointment({...serviceAppointment, branch: e.target.value})}>
                        <option value="Chennai (Adyar Hub)">Pet Paws - Chennai (Adyar Branch)</option>
                        <option value="Coimbatore (Gandhipuram Hub)">Pet Paws - Coimbatore (Gandhipuram Branch)</option>
                        <option value="Madurai Hub">Pet Paws - Madurai (Anna Nagar Branch)</option>
                        <option value="Trichy Hub">Pet Paws - Trichy (Cantonment Branch)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer bg-light rounded-bottom-4">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowBookingModal(false)}>Discard</button>
                  <button type="submit" className="btn btn-success fw-bold px-4">Secure Consultation Session</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}