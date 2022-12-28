import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function ApplicationRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/inicio" element={<h1>Home</h1>} />
          <Route path="/planos" element={<h1>About</h1>} />
          <Route path="/como_funciona" element={<h1>Como funciona</h1>} />
          <Route path="/assinar" element={<h1>Assinar</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
