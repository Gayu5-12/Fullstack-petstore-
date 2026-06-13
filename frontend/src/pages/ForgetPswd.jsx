import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../styles/Page.css";

function ForgetPswd() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/auth/forgot-password",
        { email }
      );

      localStorage.setItem(
        "resetUserId",
        response.data.userId
      );

      navigate("/reset-password");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Email not found"
      );
    }
  };

  return (
    <main
      className="py-5"
      style={{
        backgroundColor: "#fcf6f2",
        minHeight: "100vh",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: 540 }}
      >
        <div className="card shadow-sm rounded-4 p-4">
          <h2 className="fw-bold">
            Forgot Password
          </h2>

          <p className="text-muted">
            Enter your email address.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Email address
              </label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="name@example.com"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Verify Email
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ForgetPswd;