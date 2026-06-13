import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
     console.log("Login button clicked");
    try {
      console.log("Sending request...");
      const response = await api.post(
       "/auth/login",
        {
          email,
          password,
        }
      );

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userEmail", user.email);

      localStorage.setItem(
        "isAdmin",
        user.role === "admin" ? "true" : "false"
      );

      localStorage.setItem(
        "registeredUser",
        JSON.stringify({
          name: user.name,
          email: user.email,
        })
      );

      setMessage({
        type: "success",
        text: `Welcome back, ${user.name}!`,
      });

      setTimeout(() => {
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/profile");
        }
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);

      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          "Invalid email or password",
      });
    }
  };

  const handleAdminLogin = () => {
    const adminUser = window.prompt(
      "Enter Admin Username:"
    );

    if (!adminUser) return;

    const adminPass = window.prompt(
      "Enter Admin Password:"
    );

    if (!adminPass) return;

    if (
      adminUser === "Surya" &&
      adminPass === "Surya@123"
    ) {
      localStorage.setItem(
        "loggedIn",
        "true"
      );

      localStorage.setItem(
        "isAdmin",
        "true"
      );

      localStorage.setItem(
        "userEmail",
        "suryasekar626@gmail.com"
      );

      localStorage.setItem(
        "registeredUser",
        JSON.stringify({
          name: "Surya",
          email:
            "suryasekar626@gmail.com",
        })
      );

      navigate("/admin");
    } else {
      setMessage({
        type: "error",
        text:
          "Access denied. Invalid admin credentials.",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <span className="login-brand-logo">
            🐾
          </span>

          <h1 className="login-brand-name">
            Pet Paws
          </h1>

          <p className="login-brand-sub">
            Login Workspace
          </p>
        </div>

        {message.text && (
          <div
            className={
              message.type === "error"
                ? "login-error"
                : "login-success"
            }
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="login-form-group">
            <label
              htmlFor="email"
              className="login-label"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              className="login-input"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="login-form-group">
            <label
              htmlFor="password"
              className="login-label"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <Link
            to="/forgot-password"
            className="login-forgot"
          >
            Forgot Password?
          </Link>

          <button
            type="submit"
            className="btn-login-primary"
          >
            Login
          </button>
        </form>

        <div className="login-divider">
          or
        </div>

        <button
          className="btn-login-admin"
          onClick={handleAdminLogin}
        >
          Sign In as Admin
        </button>

        <div className="login-footer">
          New here?{" "}
          <Link to="/signup">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;