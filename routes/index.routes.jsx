import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "../pages/inicio/";
import Planos from "../pages/planos/";
import ComoFunciona from "../pages/como_funciona/";

export default function ApplicationRoutes() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-b to-background-dark from-background-primary">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/como_funciona" element={<ComoFunciona />} />
          <Route path="/assinar" element={<h1>Assinar</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
