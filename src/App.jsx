import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AboutPage from "./components/pages/aboutPage/AboutPage";
import Offerspages from "./components/pages/offersPages/Offerspages";
import SignUp from "./components/pages/signUp/SignUp";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/offers" element={<Offerspages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
