// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.password) {
      const existingUsers =
        JSON.parse(localStorage.getItem("dailyNestUsers")) || [];

      const isAlreadyRegistered = existingUsers.some(
        (user) => user.email === formData.email
      );

      if (isAlreadyRegistered) {
        toast.error("User already registered!");
        return;
      }

      const updatedUsers = [...existingUsers, formData];
      localStorage.setItem("dailyNestUsers", JSON.stringify(updatedUsers));

      toast.success("Registered successfully!");
      navigate("/login");
    } else {
      toast.error("All fields are required");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#121212] via-[#257406] to-[#7fe0a1] text-white overflow-x-hidden px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1b1b1b] p-6 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-xl bg-[#2c2c2c] text-white placeholder-gray-400"
          required
        />

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
          Register
        </button>

        <p className="text-sm mt-4 text-center text-white">
          Already have an account?{" "}
          <Link to="/" className="text-green-300 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
