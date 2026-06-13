import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../styles/login.css";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleLogin = () => {
    const emailVal = email.trim().toLowerCase();

    const storedUserRaw = localStorage.getItem("registeredUser");
    if (!storedUserRaw) {
      setMessage({ type: "error", text: "⚠️ No account found! Please register first." });
      setTimeout(() => navigate("/signup"), 1800);
      return;
    }

    const storedUser = JSON.parse(storedUserRaw);

    if (emailVal === storedUser.email && password === storedUser.password) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("isAdmin", "false");
      localStorage.setItem("userEmail", emailVal);
      setMessage({ type: "success", text: `🎉 Welcome back, ${storedUser.name}! Logging in...` });
      const redirect = localStorage.getItem("redirectTarget") || "/";
      localStorage.removeItem("redirectTarget");
      setTimeout(() => navigate(redirect), 1200);
    } else {
      setMessage({ type: "error", text: "❌ Invalid email or password. Please try again." });
    }
  };

  const handleAdminLogin = () => {
    const user = window.prompt("Enter Admin Username:");
    if (!user) return;
    const pass = window.prompt("Enter Admin Password:");
    if (!pass) return;

    if (user === "admin" && pass === "password123") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("userEmail", "admin@petpaws.com");
      setMessage({ type: "success", text: "✅ Admin clearance verified! Redirecting..." });
      setTimeout(() => navigate("/"), 1200);
    } else {
      setMessage({ type: "error", text: "🚫 Access denied. Invalid admin credentials." });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Brand */}
        <div className="login-brand">
          <span className="login-brand-logo">🐾</span>
          <h1 className="login-brand-name">Pet Paws</h1>
          <p className="login-brand-sub">Login Workspace</p>
        </div>

        {/* Alert message */}
        {message.text && (
          <div className={message.type === "error" ? "login-error" : "login-success"}>
            {message.text}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label className="login-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="login-input"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-form-group">
            <label className="login-label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Link to="/forgot-password" className="login-forgot">Forgot Password?</Link>

          <button type="submit" className="btn-login-primary">
            Login
          </button>
        </form>

        <div className="login-divider">or</div>

        <button className="btn-login-admin" onClick={handleAdminLogin}>
          Sign In as Admin
        </button>

        <div className="login-footer">
          New here? <Link to="/signup">Create an account</Link>
        </div>

      </div>
    </div>
  );
}

export default Login;