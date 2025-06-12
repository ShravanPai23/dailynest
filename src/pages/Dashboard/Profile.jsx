// src/pages/Dashboard/Profile.jsx
import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = ["#1DB954", "#f59e0b", "#ef4444", "#6366f1"];

const Profile = () => {
  const { user, logout } = useAuth();
  const { tasks } = useSelector((state) => state.tasks);
  const habits = useSelector((state) => state.habits.data);
  const email = JSON.parse(localStorage.getItem("dailyNestToken"))?.email;

  const taskStats = [
    {
      name: "Completed",
      value: tasks.filter((t) => t.completed).length,
    },
    {
      name: "Pending",
      value: tasks.filter((t) => !t.completed).length,
    },
    {
      name: "Important",
      value: tasks.filter((t) => t.important).length,
    },
  ];

  const habitStats = Object.entries(habits).map(([key, val]) => ({
    name: key,
    streak: val.streak,
  }));

  return (
    <div className="text-white p-4 space-y-8">
      <h1 className="text-2xl font-bold">👤 Profile</h1>
      <p className="font-bold text-[30px]">{user.name}</p>

      {/* Task Pie Chart */}
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-2">📋 Task Stats</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={taskStats}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {taskStats.map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Habit Line Chart */}
      <div className="w-full md:w-3/4">
        <h2 className="text-lg font-semibold mb-2">📈 Habit Streaks</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={habitStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="streak"
              stroke="#1DB954"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Profile;
