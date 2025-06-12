// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Extract user from context
  return user ? children : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default ProtectedRoute;
