import "../styles/Page.css";

function PetCare() {
  const services = [
    { title: "Grooming", description: "Tailored grooming plans to keep your pet happy and healthy." },
    { title: "Nutrition", description: "Custom meal recommendations for every life stage." },
    { title: "Vet Visits", description: "Book expert consultations with licensed veterinarians." },
  ];

  return (
    <main className="py-5" style={{ backgroundColor: "#fff8f6", minHeight: "100vh" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Pet Care Services</h1>
          <p className="text-muted">Holistic wellness offerings designed for dogs, cats, birds, and more.</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm rounded-4 p-4">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default PetCare;
