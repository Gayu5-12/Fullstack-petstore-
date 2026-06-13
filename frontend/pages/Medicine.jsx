import "../styles/Page.css";

function Medicine() {
  const products = [
    { name: "Joint Support", description: "Glucosamine chewables for active dogs", price: "₹1,200" },
    { name: "Skin Repair", description: "Omega-rich skin and coat supplement", price: "₹950" },
    { name: "Probiotics", description: "Daily digestive balance formula", price: "₹750" },
  ];

  return (
    <main className="py-5" style={{ minHeight: "100vh", backgroundColor: "#f9f2ea" }}>
      <div className="container">
        <div className="mb-5 text-center">
          <h1 className="fw-bold">Pet Medicine & Healthcare</h1>
          <p className="text-muted">Browse trusted supplements and prescription support for your pet.</p>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold">{product.name}</h5>
                <p className="text-muted">{product.description}</p>
                <p className="text-danger fw-bold">{product.price}</p>
                <button className="btn btn-outline-dark">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Medicine;
