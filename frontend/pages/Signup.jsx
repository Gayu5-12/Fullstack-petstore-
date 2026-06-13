import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Page.css";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email);
    alert("Welcome to Pet Paws!");
    navigate("/");
  };

  return (
    <main className="py-5" style={{ backgroundColor: "#fff8f6", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 540 }}>
        <div className="card rounded-4 shadow-sm p-4">
          <h2 className="fw-bold mb-3">Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
            </div>
            <button type="submit" className="btn btn-dark w-100">Create Account</button>
          </form>
          <div className="mt-4 text-center text-muted">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
