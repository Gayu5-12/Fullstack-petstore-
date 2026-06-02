import { Link } from "react-router-dom";
import "../styles/Page.css";

function Accessories() {
  return (
    <main className="py-5" style={{ backgroundColor: "#fff8f6" }}>
      <div className="container">
        <div className="text-center p-5 text-white rounded" style={{ background: "linear-gradient(to right, #ffb347, #ffcc33)" }}>
          <h1 className="fw-bold">Pet Accessories Store</h1>
          <p className="mb-0">Premium utility items for your furry friends</p>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-md-3">
            <div className="card h-100 text-center border-0 shadow-sm p-3">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500" className="card-img-top rounded" alt="Dog Collar" />
              <h5 className="fw-bold mt-3">Dog Collar</h5>
              <p className="text-danger fw-bold">₹499</p>
              <button className="btn btn-warning" onClick={() => alert("Added to cart!")}>Buy Now</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center border-0 shadow-sm p-3">
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500" className="card-img-top rounded" alt="Pet Bed" />
              <h5 className="fw-bold mt-3">Pet Bed</h5>
              <p className="text-danger fw-bold">₹899</p>
              <button className="btn btn-warning" onClick={() => alert("Added to cart!")}>Buy Now</button>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-dark">Return to Home</Link>
        </div>
      </div>
    </main>
  );
}

export default Accessories;
