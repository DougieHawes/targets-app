import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./style.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
