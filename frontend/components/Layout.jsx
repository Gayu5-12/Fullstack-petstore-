import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Page.css";

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
