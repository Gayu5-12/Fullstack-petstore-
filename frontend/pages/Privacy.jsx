import "../styles/Page.css";

function Privacy() {
  return (
    <main className="py-5" style={{ backgroundColor: "#fff8f6", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <h1 className="fw-bold mb-4">Privacy Policy</h1>
        <p className="text-muted">This policy explains how Pet Paws collects, uses, and protects your personal data.</p>

        <div className="mt-4">
          <h3>Information We Collect</h3>
          <p>We gather your contact details, account preferences, order history, and support requests to provide a seamless pet care experience.</p>

          <h3>How We Use Data</h3>
          <p>Your information is used to fulfill orders, manage adoptions, send notifications, and improve service quality.</p>

          <h3>Security</h3>
          <p>We protect your data with industry-standard safeguards and do not share it with unauthorized third parties.</p>
        </div>
      </div>
    </main>
  );
}

export default Privacy;
