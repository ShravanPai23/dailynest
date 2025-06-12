// src/pages/Dashboard/Habits.jsx
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHabit, loadHabits } from "../../features/habits/habitSlice";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
} from "date-fns";

const Habits = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.data);
  const [monthOffset, setMonthOffset] = useState(0);

  useEffect(() => {
    dispatch(loadHabits());
  }, [dispatch]);

  const refDate = addMonths(new Date(), monthOffset);
  const start = startOfMonth(refDate);
  const end = endOfMonth(refDate);
  const days = eachDayOfInterval({ start, end });
  const today = format(new Date(), "yyyy-MM-dd");

  const handleToggle = (habitName) => {
    dispatch(toggleHabit({ habitName }));
  };

  return (
    <div className="text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setMonthOffset((prev) => prev - 1)}
          className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
        >
          ⬅ Prev
        </button>
        <h2 className="text-xl font-bold">
          {format(refDate, "MMMM yyyy")} Habit Tracker
        </h2>
        <button
          onClick={() => setMonthOffset((prev) => prev + 1)}
          className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
        >
          Next ➡
        </button>
      </div>

      {Object.entries(habits).map(([habitName, habitData]) => (
        <div
          key={habitName}
          className="mb-8 bg-[#1a1a1a] p-4 rounded-xl shadow-md"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="capitalize text-lg font-semibold">
              {habitName}
            </span>
            {monthOffset === 0 && (
              <button
                onClick={() => handleToggle(habitName)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
              >
                Mark Today
              </button>
            )}
          </div>

          <div className="grid grid-cols-7 gap-2 text-xs text-center">
            {days.map((day) => {
              const dayStr = format(day, "yyyy-MM-dd");
              const marked = habitData.dates?.[dayStr];

              return (
                <div
                  key={dayStr}
                  className={`w-8 h-8 flex items-center justify-center rounded-md border
                  ${
                    marked
                      ? "bg-green-500 text-white"
                      : "bg-[#2e2e2e] text-gray-400"
                  }`}
                >
                  {format(day, "d")}
                </div>
              );
            })}
          </div>

          <div className="mt-2 text-sm text-green-300">
            🔥 Current Streak: {habitData.streak} days
          </div>
        </div>
      ))}
    </div>
  );
};

export default Habits;
