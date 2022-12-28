import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "../pages/inicio";
import Planos from "../pages/planos";
import ComoFunciona from "../pages/como_funciona";
import Assinar from "../pages/assinar";
import Navbar from "../components/navbar/";
import Support from "../components/whatsapp";

export default function ApplicationRoutes() {
  return (
    <Router>
      <div className="h-screen w-screen overflow-hidden bg-gradient-to-b to-background-dark from-background-primary">
        <div className="h-screen w-screen opacity-20 blur-sm md:bg-image bg-cover bg-opacity-20 backdrop-blur-sm" />
        <div className="h-screen w-screen absolute top-0 z-[1]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/como_funciona" element={<ComoFunciona />} />
            <Route path="/assinar" element={<Assinar />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
          <p className="w-screen bottom-5 absolute text-center text-typography-primary opacity-30">
            Golden GreyHound © 2022 - Termos - Privacidade
          </p>
        </div>
      </div>
      <Support />
    </Router>
  );
}
