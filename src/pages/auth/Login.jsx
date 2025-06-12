// src/pages/Login.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext"; // ✅ Import useAuth

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth(); // ✅ Get login function from context

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const users = JSON.parse(localStorage.getItem("dailyNestUsers")) || [];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      // Use name and email for login
      login(matchedUser.name, matchedUser.email); // Store both name and email
      toast.success("Login Successful!");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#121212] via-[#257406] to-[#7fe0a1] text-white overflow-x-hidden px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1b1b1b] p-6 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-xl bg-[#2c2c2c] text-white placeholder-gray-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-xl bg-[#2c2c2c] text-white placeholder-gray-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#1DB954] text-black font-semibold py-2 rounded-xl hover:bg-green-600 transition"
        >
          Login
        </button>

        <p className="text-sm mt-4 text-center text-white">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-300 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
