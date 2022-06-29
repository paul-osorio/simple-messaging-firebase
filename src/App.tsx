import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Message from "./pages/message";
import Register from "./pages/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Message" element={<Message />} />
    </Routes>
  );
}

export default App;
