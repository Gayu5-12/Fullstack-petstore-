import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Accessories from "../pages/Accessories";
import Admin from "../pages/Admin";
import Adopt from "../pages/Adopt";
import AuthGateway from "../pages/AuthGateway";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import ForgetPswd from "../pages/ForgetPswd";
import ResetPassword from "../pages/ResetPassword";
import Login from "../pages/Login";
import Medicine from "../pages/Medicine";
import PetCare from "../pages/PetCare";
import Privacy from "../pages/Privacy";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Terms from "../pages/Terms";
import AnimalAbuse from "../pages/AnimalAbuse";
import PetVaccination from "../pages/PetVaccination";
import PetNutrition from "../pages/PetNutrition";
import Sell from "../pages/Sell";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="admin" element={<Admin />} />
        <Route path="adopt" element={<Adopt />} />
        <Route path="sell" element={<Sell />} />
        <Route path="auth-gateway" element={<AuthGateway />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="forgot-password" element={<ForgetPswd />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="login" element={<Login />} />
        <Route path="medicine" element={<Medicine />} />
        <Route path="petcare" element={<PetCare />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<Signup />} />
        <Route path="terms" element={<Terms />} />
        <Route path="animal-abuse" element={<AnimalAbuse />} />
        <Route path="pet-vaccination" element={<PetVaccination />} />
        <Route path="pet-nutrition" element={<PetNutrition />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
