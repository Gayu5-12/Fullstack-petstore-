import { useNavigate } from "react-router-dom";
import "../styles/Page.css";

function AuthGateway() {
  const navigate = useNavigate();

  return (
    <main className="py-5" style={{ backgroundColor: "#fff8f6", minHeight: "100vh" }}>
      <div className="container text-center" style={{ maxWidth: 760 }}>
        <h2 className="fw-bold mb-2 text-dark">Welcome to <span style={{ color: "#8a4d3a" }}>Pet Paws</span></h2>
        <p className="text-muted mb-5">Please select how you would like to proceed into your pet care dashboard.</p>

        <div className="row g-4 justify-content-center">
          <div className="col-md-5">
            <div className="card p-4 shadow-sm h-100" style={{ borderRadius: 20, cursor: "pointer" }} onClick={() => navigate("/signup")}> 
              <div className="card-body">
                <div style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: "#f4d5cb", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", color: "#8a4d3a", fontSize: 28 }}>
                  <i className="fa-solid fa-user-plus"></i>
                </div>
                <h4 className="fw-bold text-dark mb-2">New User</h4>
                <p className="text-secondary small mb-4">Create a secure account to log pet metrics, access medications, and file adoptions.</p>
                <span className="btn btn-dark w-100 py-2" style={{ borderRadius: 12, fontWeight: 700 }}>Register</span>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card p-4 shadow-sm h-100" style={{ borderRadius: 20, cursor: "pointer" }} onClick={() => navigate("/login")}> 
              <div className="card-body">
                <div style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: "#f4d5cb", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", color: "#8a4d3a", fontSize: 28 }}>
                  <i className="fa-solid fa-right-to-bracket"></i>
                </div>
                <h4 className="fw-bold text-dark mb-2">Existing User</h4>
                <p className="text-secondary small mb-4">Log straight into your system using your verified profile.</p>
                <span className="btn btn-outline-dark w-100 py-2 rounded-3" style={{ fontWeight: 600 }}>Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthGateway;
