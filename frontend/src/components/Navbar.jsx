import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedIn =
      localStorage.getItem("loggedIn") === "true";

    const admin =
      localStorage.getItem("isAdmin") === "true";

    setIsLoggedIn(loggedIn);
    setIsAdmin(admin);

    if (loggedIn) {
      const userData = JSON.parse(
        localStorage.getItem("registeredUser") || "{}"
      );

      setUserName(userData.name || "User");
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("registeredUser");

    setIsLoggedIn(false);
    setDropdownOpen(false);

    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link
          to="/"
          className="navbar-brand"
          onClick={() => setMenuOpen(false)}
        >
          🐾 Pet Paws
        </Link>

        <button
          className={`navbar-hamburger ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`navbar-menu ${
            menuOpen ? "open" : ""
          }`}
        >
          <Link
            to="/"
            className={`navbar-link ${
              location.pathname === "/"
                ? "active"
                : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/accessories"
            className={`navbar-link ${
              location.pathname ===
              "/accessories"
                ? "active"
                : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Accessories
          </Link>

          <Link
            to="/petcare"
            className={`navbar-link ${
              location.pathname ===
              "/petcare"
                ? "active"
                : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Pet Care
          </Link>

          <Link
            to="/medicine"
            className={`navbar-link ${
              location.pathname ===
              "/medicine"
                ? "active"
                : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Pet Medicine
          </Link>

          <Link
            to="/adopt"
            className={`navbar-link ${
              location.pathname ===
              "/adopt"
                ? "active"
                : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Adopt a Pet
          </Link>

          <Link
            to="/sell"
            className={`navbar-link ${
              location.pathname === "/sell"
                ? "active"
                : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Sell a Pet
          </Link>

          {isLoggedIn ? (
            <div className="navbar-user-menu">

              <button
                className="navbar-user-btn"
                onClick={() =>
                  setDropdownOpen(!dropdownOpen)
                }
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Profile"
                  className="navbar-user-avatar"
                />
                {userName}
              </button>

              {dropdownOpen && (
                <div className="navbar-dropdown">

                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="navbar-dropdown-item"
                      onClick={() => {
                        setMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      <i className="fa-solid fa-user-shield"></i>
                      {" "}Admin Dashboard
                    </Link>
                  )}

                  <Link
                    to="/profile"
                    className="navbar-dropdown-item"
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    <i className="fa-solid fa-user"></i>
                    {" "}Profile Dashboard
                  </Link>

                  <Link
                    to="/animal-abuse"
                    className="navbar-dropdown-item"
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    <i className="fa-solid fa-heart-crack"></i>
                    {" "}Animal Abuse
                  </Link>

                  <Link
                    to="/pet-vaccination"
                    className="navbar-dropdown-item"
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    <i className="fa-solid fa-syringe"></i>
                    {" "}Pet Vaccination
                  </Link>

                  <Link
                    to="/pet-nutrition"
                    className="navbar-dropdown-item"
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    <i className="fa-solid fa-apple"></i>
                    {" "}Pet Nutrition
                  </Link>

                  <hr className="navbar-dropdown-divider" />

                  <button
                    className="navbar-dropdown-item navbar-logout-btn"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-sign-out-alt"></i>
                    {" "}Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <>
              <Link
                to="/login"
                className={`navbar-link ${
                  location.pathname === "/login"
                    ? "active"
                    : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
              >
                
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;