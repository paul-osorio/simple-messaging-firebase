import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/home";
import Login from "./pages/login";
import Message from "./pages/message";
import Register from "./pages/register";
import FriendRequest from "./pages/NewFriends";
import ForgotPassword from "./pages/forgotpassword";
import SuccessPasswordChange from "./pages/forgotpassword/SuccessPasswordChange";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <Routes>
      <Route path="/verifyemail" element={<VerifyEmail />} />

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/successpasswordchange"
          element={<SuccessPasswordChange />}
        />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/message/:id" element={<Message />} />
        <Route path="/friendrequest" element={<FriendRequest />} />
      </Route>
    </Routes>
  );
}

export default App;
