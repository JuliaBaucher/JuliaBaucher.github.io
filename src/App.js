import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import ProjectDetail from "./components/ProjectDetail";
import ProjectsPage from "./components/ProjectsPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
