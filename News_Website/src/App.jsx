import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Buletin from "./components/pages/Buletin/Buletin";
import BuletinData from "./components/pages/Buletin/BuletinData";
import NavBar from "./components/Navbar/NavBar"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Buletin />} />
        <Route path="/article/:id" element={<BuletinData />} />
      </Routes>
    </Router>
  );
}

export default App;
