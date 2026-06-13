import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (

    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"></Link>
      </div>
      <div className="navbar-links">
        <Link to="/"></Link>
        <Link to="/about"></Link>
        <Link to="/adopt"></Link>
        <Link to="/accessories"></Link>
        <Link to="/contact"></Link>
        <Link to="/login"></Link>
      </div>
    </nav>
  );
}

export default Navbar;
