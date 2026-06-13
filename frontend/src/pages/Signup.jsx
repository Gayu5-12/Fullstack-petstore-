import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import api from "../api/axios";

export default function SignupForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    password: false,
  });

  const nameRegex = /^[a-zA-Z\s]{3,50}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  const validate = {
    fullName: (val) => nameRegex.test(val.trim()),
    email: (val) => emailRegex.test(val.trim()),
    password: (val) => passwordRegex.test(val),
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/auth/register", {
      name: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      password: form.password,
    });

    console.log("Success:", response.data);

    alert(response.data.message || "Registration successful!");
    navigate("/login");
  } catch (error) {
    console.error("Full Error:", error);

    if (error.response) {
      console.log("Response Data:", error.response.data);
      console.log("Status:", error.response.status);

      alert(
        error.response.data.message ||
          `Registration failed (${error.response.status})`
      );
    } else if (error.request) {
      alert("Backend server is not responding.");
    } else {
      alert(error.message);
    }
  }
};
  const getInputClass = (fieldId) => {
    if (!touched[fieldId]) return "form-control";

    return validate[fieldId](form[fieldId])
      ? "form-control is-valid"
      : "form-control is-invalid";
  };

  return (
    <div className="su-page">
      <div className="container py-5">
        <div className="card mx-auto border-0 shadow p-4 su-card">
          <h2 className="fw-bold text-center mb-4 su-title">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label
                htmlFor="fullName"
                className="form-label small fw-bold text-secondary"
              >
                Full Name
              </label>

              <input
                type="text"
                id="fullName"
                className={getInputClass("fullName")}
                placeholder="e.g. John Doe"
                value={form.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="invalid-feedback">
                Name must contain only letters and spaces (minimum 3
                characters).
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label small fw-bold text-secondary"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                className={getInputClass("email")}
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label small fw-bold text-secondary"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                className={getInputClass("password")}
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="invalid-feedback">
                Password must contain 8–20 characters, one number, and one
                special character.
              </div>
            </div>

            <button
              type="submit"
              className="btn w-100 text-white mt-2 su-submit-btn"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}