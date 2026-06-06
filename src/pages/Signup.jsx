import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

export default function SignupForm() {
  const navigate = useNavigate();
  // 1. Form values state
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  
  // 2. Form field interaction status (prevents showing errors before user types)
  const [touched, setTouched] = useState({ fullName: false, email: false, password: false });

  // Validation Regular Expressions
  const nameRegex = /^[a-zA-Z\s]{3,50}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  // Helper validation evaluation function
  const validate = {
    fullName: (val) => nameRegex.test(val.trim()),
    email: (val) => emailRegex.test(val.trim()),
    password: (val) => passwordRegex.test(val),
  };

  // 3. useEffect to handle browser window tab context preservation if necessary
  useEffect(() => {
    // This effect ensures any initial rendering procedures run smoothly 
    // and prepares clean hooks for localStorage actions.
  }, []);

  // Update values dynamically on keystroke
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  // Track when a user clicks out/interacts with a field
  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields touched to trigger validation states visually
    setTouched({ fullName: true, email: true, password: true });

    const isNameValid = validate.fullName(form.fullName);
    const isEmailValid = validate.email(form.email);
    const isPasswordValid = validate.password(form.password);

    if (isNameValid && isEmailValid && isPasswordValid) {
      const enteredEmail = form.email.trim().toLowerCase();
      const existingUserRaw = localStorage.getItem("registeredUser");

      if (existingUserRaw) {
        const existingUser = JSON.parse(existingUserRaw);
        if (existingUser.email === enteredEmail) {
          alert("⚠️ Already a user! This email is already registered. Redirecting you to login...");
          navigate("/login");
          return;
        }
      }

      const userDataObj = {
        name: form.fullName.trim(),
        email: enteredEmail,
        password: form.password,
      };

      localStorage.setItem("registeredUser", JSON.stringify(userDataObj));
      localStorage.removeItem("loggedIn");

      alert("🎉 Account registered successfully! Pushing to login screen...");
      navigate("/login");
    } else {
      alert("Please correct the fields highlighted in red.");
    }
  };

  // Helper calculation to assign appropriate Bootstrap validation classes
  const getInputClass = (fieldId) => {
    if (!touched[fieldId]) return "form-control";
    return validate[fieldId](form[fieldId]) ? "form-control is-valid" : "form-control is-invalid";
  };

  return (
    <div className="su-page">
      <div className="container py-5">
        <div className="card mx-auto border-0 shadow p-4 su-card">
          <h2 className="fw-bold text-center mb-4 su-title">Create Account</h2>

          <form id="signupForm" onSubmit={handleSubmit} noValidate>
            {/* Full Name Input */}
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label small fw-bold text-secondary">
                Full Name
              </label>
              <input
                type="text"
                className={getInputClass("fullName")}
                id="fullName"
                placeholder="e.g. John Doe"
                value={form.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="invalid-feedback">
                Name must contain only letters and spaces (min 3 characters).
              </div>
            </div>

            {/* Email Address Input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label small fw-bold text-secondary">
                Email Address
              </label>
              <input
                type="email"
                className={getInputClass("email")}
                id="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="invalid-feedback">
                Please enter a valid email address structure.
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label small fw-bold text-secondary">
                Password
              </label>
              <input
                type="password"
                className={getInputClass("password")}
                id="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="invalid-feedback">
                Password must be at least 8 characters long, contain a number, and a special character.
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn w-100 text-white mt-2 su-submit-btn">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}