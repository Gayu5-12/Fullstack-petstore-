import "../styles/Page.css";

function Faq() {
  const faqs = [
    { question: "How do I adopt a pet?", answer: "Sign in and visit the Adopt page to view available pets and complete the application." },
    { question: "Do you ship accessories across India?", answer: "Yes, we deliver accessories to most cities with tracking information." },
    { question: "Can I book a vet appointment online?", answer: "Yes, our Pet Care page offers qualified vets for consultation booking." },
    { question: "What is your return policy?", answer: "Returns are accepted for eligible products within 7 days of delivery." },
  ];

  return (
    <main className="py-5" style={{ backgroundColor: "#fff8f6", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="mb-5 text-center">
          <h1 className="fw-bold">Frequently Asked Questions</h1>
          <p className="text-muted">Everything you need to know before you buy, adopt, or care for your pet.</p>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button className={`accordion-button ${index !== 0 ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0} aria-controls={`collapse${index}`}>
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Faq;
