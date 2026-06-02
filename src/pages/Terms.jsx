import "../styles/Page.css";

function Terms() {
  return (
    <main className="py-5" style={{ backgroundColor: "#fff8f6", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <h1 className="fw-bold mb-4">Terms and Conditions</h1>
        <p className="text-muted">Please read these terms carefully before using the Pet Paws website.</p>

        <div className="mt-4">
          <h3>Acceptance</h3>
          <p>By accessing this site, you agree to comply with our terms and policies.</p>

          <h3>Usage Guidelines</h3>
          <p>You may use the site for personal pet adoption, care, and purchases only.</p>

          <h3>Policy Changes</h3>
          <p>We may update these terms in the future. Continued use of the site means you accept changes.</p>
        </div>
      </div>
    </main>
  );
}

export default Terms;
