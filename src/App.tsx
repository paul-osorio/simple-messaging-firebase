import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Message from "./pages/message";
import Register from "./pages/register";
import { auth } from "./services/firebase.config";

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
      }
    });
  }, []);
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
