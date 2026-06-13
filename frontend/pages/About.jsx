import "../styles/Page.css";

function About() {
  return (
    <div className="about-page bg-light text-dark">
      <header className="py-5 text-center bg-white border-bottom shadow-sm">
        <div className="container py-3">
          <h1 className="display-4 fw-bold text-dark mb-2">
            About <span style={{ color: "#8a4d3a" }}>Pet Paws</span>
          </h1>
          <p className="fs-4 text-muted fst-italic">
            "Caring for your friends like family since 2018."
          </p>
        </div>
      </header>

      <main className="container py-5">
        <section className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: "#8a4d3a" }}>
              Our Identity & Ecosystem
            </h2>
            <p className="lead mb-4">
              Pet Paws is a comprehensive platform built specifically for modern pet parents. We bring specialized ecosystem solutions across routine veterinary health tracking, expert ethical breeding consulting, grooming management, and certified product supplies right into a unified portal framework.
            </p>
            <p className="text-secondary">
              We believe that finding high-quality pet care, authentic clinical resources, and seamless adoption channels shouldn't be complicated. By uniting passionate animal specialists with verified tech solutions, we guarantee safety, transparency, and happiness for every single paw.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800"
              className="img-fluid rounded-4 shadow"
              alt="Pet community"
            />
          </div>
        </section>

        <section className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: "#f4d5cb" }}>
              <div className="card-body">
                <h3 className="fw-bold mb-3" style={{ color: "#8a4d3a" }}>
                  <i className="fa-solid fa-bullseye me-2" /> Our Mission
                </h3>
                <p className="card-text text-dark">
                  To simplify pet parenting by delivering a verified, transparent network of healthcare, premium products, and safe adoption systems that treat every domestic animal with respect and absolute compassion.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: "#f4d5cb" }}>
              <div className="card-body">
                <h3 className="fw-bold mb-3" style={{ color: "#8a4d3a" }}>
                  <i className="fa-solid fa-eye me-2" /> Our Vision
                </h3>
                <p className="card-text text-dark">
                  To become the world's most trusted global standard platform for holistic pet care solutions, engineering a future where no rescue animal is left without a home and shelter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-4 p-5 shadow-sm mb-5 text-center">
          <h2 className="fw-bold mb-5" style={{ color: "#8a4d3a" }}>
            Pet Paws by the Numbers
          </h2>
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="p-4 text-white rounded-3 shadow-sm" style={{ backgroundColor: "#dbaaa0" }}>
                <h3 className="display-5 fw-bold mb-1">12,000+</h3>
                <p className="mb-0 small text-uppercase tracking-wider fw-semibold">Happy Pets Served</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="p-4 text-white rounded-3 shadow-sm" style={{ backgroundColor: "#dbaaa0" }}>
                <h3 className="display-5 fw-bold mb-1">45+</h3>
                <p className="mb-0 small text-uppercase tracking-wider fw-semibold">Certified Vets</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="p-4 text-white rounded-3 shadow-sm" style={{ backgroundColor: "#dbaaa0" }}>
                <h3 className="display-5 fw-bold mb-1">3,500+</h3>
                <p className="mb-0 small text-uppercase tracking-wider fw-semibold">Successful Adoptions</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="p-4 text-white rounded-3 shadow-sm" style={{ backgroundColor: "#dbaaa0" }}>
                <h3 className="display-5 fw-bold mb-1">99.4%</h3>
                <p className="mb-0 small text-uppercase tracking-wider fw-semibold">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        <section className="row g-5 mb-5 align-items-center">
          <div className="col-lg-5">
            <h2 className="fw-bold mb-3" style={{ color: "#8a4d3a" }}>
              Our Strategic Milestones
            </h2>
            <p className="text-secondary">
              Take a look back at how we evolved from a regional companion sitting circle into a highly structural veterinary health network digital marketplace.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="d-flex mb-4">
              <div className="me-3 text-center">
                <span className="badge rounded-circle p-3 fs-5 text-white" style={{ backgroundColor: "#c98678", width: 50, height: 50, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  1
                </span>
              </div>
              <div className="pt-1">
                <h5 className="fw-bold mb-1" style={{ color: "#8a4d3a" }}>2018 — The Spark</h5>
                <p className="text-secondary small mb-0">Founded as a local physical rescue network center running standard local adoption helper events.</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="me-3 text-center">
                <span className="badge rounded-circle p-3 fs-5 text-white" style={{ backgroundColor: "#c98678", width: 50, height: 50, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  2
                </span>
              </div>
              <div className="pt-1">
                <h5 className="fw-bold mb-1" style={{ color: "#8a4d3a" }}>2021 — Service Integration</h5>
                <p className="text-secondary small mb-0">Launched veterinary health mapping, groomer spa directories, and clinical validation panels.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="me-3 text-center">
                <span className="badge rounded-circle p-3 fs-5 text-white" style={{ backgroundColor: "#c98678", width: 50, height: 50, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  3
                </span>
              </div>
              <div className="pt-1">
                <h5 className="fw-bold mb-1" style={{ color: "#8a4d3a" }}>2026 — Present Ecosystem</h5>
                <p className="text-secondary small mb-0">Processing hundreds of dynamic accessory transactions and secure legal pet placements every single day.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mb-5">
          <h2 className="fw-bold mb-5" style={{ color: "#8a4d3a" }}>Our Care Leadership</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4 col-sm-6">
              <div className="card h-100 p-4 border-0 shadow-sm bg-white">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" className="mx-auto mb-3 border border-3 rounded-circle shadow-sm" style={{ width: 120, height: 120, objectFit: "cover", borderColor: "#f4d5cb" }} alt="CEO" />
                <h5 className="fw-bold mb-1">Dr. Ananya Sharma</h5>
                <p className="text-muted small mb-2">Founder & Chief Executive Officer</p>
                <p className="card-text small text-secondary">A wildlife veterinarian with over 12 years of clinical operations experience.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card h-100 p-4 border-0 shadow-sm bg-white">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300" className="mx-auto mb-3 border border-3 rounded-circle shadow-sm" style={{ width: 120, height: 120, objectFit: "cover", borderColor: "#f4d5cb" }} alt="COO" />
                <h5 className="fw-bold mb-1">Rahul Mehta</h5>
                <p className="text-muted small mb-2">Chief Operations Lead</p>
                <p className="card-text small text-secondary">Manages logistical operations, secure trade lines, and pharmaceutical inventory.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mt-5 pt-3">
          <a href="/" className="btn btn-dark btn-lg px-5 py-3 rounded-pill fw-bold">
            <i className="fa-solid fa-arrow-left me-2" /> Return to Homepage
          </a>
        </div>
      </main>

      <footer className="bg-white border-top py-4 text-center mt-5">
        <div className="container">
          <p className="text-secondary small mb-0">© 2026 Pet Paws Ecosystem. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
