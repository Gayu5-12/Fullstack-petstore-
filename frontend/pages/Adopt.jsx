import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import "../styles/Page.css";


function Adopt() {
  const [selectedColor, setSelectedColor] = useState("");
  const navigate = useNavigate();

  const [pets, setPets] = useState([]); // ✅ now comes from backend
  const [loading, setLoading] = useState(true);

  // 🔐 login check
  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      localStorage.setItem("redirectTarget", "/adopt");
      alert("Please sign in first.");
      navigate("/auth-gateway");
    }
  }, [navigate]);

  // 📡 fetch pets from backend
  useEffect(() => {
    API.get("/api/pets")
      .then((res) => {
        setPets(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching pets:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="py-5" style={{ backgroundColor: "#F9F2EA", minHeight: "100vh" }}>
      <div className="container">

        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h1 className="fw-bold">Adopt a Pet</h1>
            <p className="text-muted">
              Find your perfect companion from our vetted, loving animal listings.
            </p>
          </div>
        </div>

        {/* 🟡 Loading state */}
        {loading ? (
          <p className="text-center">Loading pets...</p>
        ) : (
          <div className="row g-4">
            {pets.length > 0 ? (
              pets.map((pet) => (
                <div key={pet._id || pet.id} className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{pet.name}</h5>
                      <p className="card-text mb-1">{pet.breed}</p>
                      <p className="text-danger fw-bold">
                        ₹{pet.price}
                      </p>

                      <button
                        className="btn btn-primary w-100"
                        onClick={() => alert(`Adopt ${pet.name} clicked`)}
                      >
                        Adopt Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No pets available</p>
            )}
          </div>
        )}

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-dark">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}

export default Adopt;