import { useState } from "react";
import "../styles/Page.css";

function ForgetPswd() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="py-5" style={{ backgroundColor: "#fcf6f2", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 540 }}>
        <div className="card shadow-sm rounded-4 p-4">
          <h2 className="fw-bold">Forgot Password</h2>
          <p className="text-muted">Enter your email address and we will send you a reset link.</p>

          {submitted ? (
            <div className="alert alert-success">A password reset link has been sent to {email}.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required />
              </div>
              <button type="submit" className="btn btn-primary">Send Reset Link</button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default ForgetPswd;
