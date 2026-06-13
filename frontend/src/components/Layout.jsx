import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Page.css";

function Layout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/reset-password";

  return (
    <div className="app-shell">
      {!hideLayout && <Navbar />}

      <main className="page-wrapper">
        <Outlet />
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default Layout;