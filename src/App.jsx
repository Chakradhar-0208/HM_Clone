import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ladies from "./components/Ladies";
import Men from "./components/Men";
import Kids from "./components/Kids";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LadiesSection from "./components/LadiesSection";
import MenSection from "./components/MenSection";

function AppContent() {
  const location = useLocation();
  const path = location.pathname;
  const a=useEffect((e)=>{alert("This Page is Still Under Development..")},[])
  const showHero = ["/ladies", "/men","/home"].includes(path);

  return (
    <>
      <Header />
      {showHero && <Hero />}
      <Routes>
        <Route path="/" element={<Navigate to="/ladies" replace />} />
        <Route path="/ladies" element={<Ladies />} />
        <Route path="/ladies/:sectionId" element={<LadiesSection />} />
        <Route path="/men" element={<Men />} />
        <Route path="/men/:sectionId" element={<MenSection />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

// Wrap AppContent in Router
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
