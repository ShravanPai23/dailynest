// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("dailyNestToken"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const login = (name, email) => {
    const userData = { name, email };
    setUser(userData);
    localStorage.setItem("dailyNestToken", JSON.stringify(userData));
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("dailyNestToken");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
