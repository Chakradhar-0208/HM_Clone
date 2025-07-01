import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Ladies from "./components/Ladies";
import Men from "./components/Men";
import Kids from "./components/Kids";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Ladies />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
