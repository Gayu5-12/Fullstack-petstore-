import "../styles/Page.css";

function Contact() {
  return (
    <main className="py-5" style={{ backgroundColor: "#f9f2ea", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="p-4 bg-white rounded-4 shadow-sm">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">We are here to help with adoption inquiries, orders, and pet care guidance.</p>

          <form className="mt-4">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your full name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="you@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
