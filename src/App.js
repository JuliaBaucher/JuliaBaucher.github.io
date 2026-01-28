import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";   // 👈 removed BrowserRouter
import Portfolio from "./components/Portfolio";
import ProjectDetail from "./components/ProjectDetail";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
