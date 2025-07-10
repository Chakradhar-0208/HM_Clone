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
import HomeSection from "./components/HomeSection";
import KidsSection from "./components/KidsSection";
import ScrollToTop from "./components/ScrollToTop";
import Favourites from "./components/Favourites";
import { WishlistProvider } from "./components/WishlistContext";

function AppContent() {
  const location = useLocation();
  const path = location.pathname;
  const a = useEffect((e) => {
    alert(
      "This Page is a Clone,  Still Under Development..\nMore items will be added soon.."
    );
  }, []);
  const showHero = ["/ladies", "/men"].includes(path);

  return (
    <>
      <Header />
      {showHero && <Hero />}
      <Routes>
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/" element={<Navigate to="/ladies" replace />} />
        <Route path="/ladies" element={<Ladies />} />
        <Route path="/ladies/:sectionId" element={<LadiesSection />} />
        <Route path="/men" element={<Men />} />
        <Route path="/men/:sectionId" element={<MenSection />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/kids/:sectionId" element={<KidsSection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:sectionId" element={<HomeSection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <WishlistProvider>
        <AppContent />
      </WishlistProvider>
    </Router>
  );
}
