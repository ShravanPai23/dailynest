// src/pages/Dashboard/Layout.jsx
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#257406] to-[#7fe0a1] text-white">
      <header className="flex justify-between items-center p-4 border-b border-green-700">
        <h1 className="text-2xl font-bold text-green-400">
          Heyy {user?.name} 👋
        </h1>
        <nav className="space-x-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-green-300 font-semibold" : "hover:text-green-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? "text-green-300 font-semibold" : "hover:text-green-400"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/habits"
            className={({ isActive }) =>
              isActive ? "text-green-300 font-semibold" : "hover:text-green-400"
            }
          >
            Habits
          </NavLink>
          <button
            onClick={handleLogout}
            className="bg-green-600 px-3 py-1 rounded-xl hover:bg-green-700 ml-4"
          >
            Logout
          </button>
        </nav>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
