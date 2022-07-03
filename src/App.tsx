import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/App.css";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./context/AuthProvider";
import Home from "./pages/home";
import Login from "./pages/login";
import Message from "./pages/message";
import Register from "./pages/register";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
      </Route>
    </Routes>
  );
}

export default App;
