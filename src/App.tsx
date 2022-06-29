import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;
