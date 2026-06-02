import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Page.css";

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    if (!isAdmin) {
      alert("Access denied. Redirecting to home.");
      navigate("/");
    }
  }, [navigate]);

  return (
    <main className="py-5" style={{ backgroundColor: "#121212", color: "#ffffff", minHeight: "100vh" }}>
      <div className="container">
        <div className="bg-secondary p-5 rounded-4 shadow text-white">
          <h1 className="fw-bold text-warning">🛠️ Root Control Admin Console</h1>
          <p className="text-light mt-2">System access levels: Root parameters confirmed active.</p>
          <div className="row g-4 mt-4 text-dark">
            <div className="col-md-4"><div className="p-3 bg-white rounded"><h5>Adoption Files</h5><p className="display-6 fw-bold">8 Pending</p></div></div>
            <div className="col-md-4"><div className="p-3 bg-white rounded"><h5>Pet Care Bookings</h5><p className="display-6 fw-bold">12 Scheduled</p></div></div>
            <div className="col-md-4"><div className="p-3 bg-white rounded"><h5>Store Catalog Logs</h5><p className="display-6 fw-bold">144 Items</p></div></div>
          </div>
          <div className="mt-5"><Link to="/" className="btn btn-warning">Return to Platform Site</Link></div>
        </div>
      </div>
    </main>
  );
}

export default Admin;
