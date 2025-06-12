// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LandingPage from "./pages/Landing/LandingPage";
import Layout from "./pages/Dashboard/Layout";
import Habits from "./pages/Dashboard/Habits";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Dashboard/Home";
import Profile from "./pages/Dashboard/Profile";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route for Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="habits" element={<Habits />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
