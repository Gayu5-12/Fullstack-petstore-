import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Page.css";

function Profile() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    if (!loggedIn) {
      navigate("/auth-gateway");
    } else {
      setEmail(localStorage.getItem("userEmail") || "user@example.com");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <main className="py-5" style={{ minHeight: "100vh", backgroundColor: "#f9f2ea" }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="card rounded-4 shadow-sm p-4">
          <h1 className="fw-bold">Your Profile</h1>
          <p className="text-muted">Manage your contact details, saved pets, and account settings.</p>

          <div className="mt-4">
            <h5>Email</h5>
            <p>{email}</p>
          </div>

          <div className="mt-4">
            <h5>Membership</h5>
            <p>Member since 2025</p>
          </div>

          <div className="d-flex gap-3 flex-wrap mt-4">
            <button className="btn btn-danger" onClick={logout}>Logout</button>
            <Link to="/" className="btn btn-outline-dark">Return Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
