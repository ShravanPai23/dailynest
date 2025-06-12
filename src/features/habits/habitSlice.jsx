// src/features/habits/habitSlice.js
import { createSlice } from "@reduxjs/toolkit";

const getToday = () => new Date().toISOString().split("T")[0]; // YYYY-MM-DD

const initialState = {
  data: {
    water: { dates: {}, streak: 0 },
    workout: { dates: {}, streak: 0 },
    productivity: { dates: {}, streak: 0 },
  },
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    toggleHabit: (state, action) => {
      const { habitName } = action.payload;
      const today = getToday();
      const habit = state.data[habitName];

      if (habit.dates[today]) {
        delete habit.dates[today];
        habit.streak = 0;
      } else {
        habit.dates[today] = true;

        const yesterday = new Date(Date.now() - 86400000)
          .toISOString()
          .split("T")[0];
        habit.streak = habit.dates[yesterday] ? habit.streak + 1 : 1;
      }

      localStorage.setItem("dailyNestHabits", JSON.stringify(state.data));
    },
    loadHabits: (state) => {
      const stored = JSON.parse(localStorage.getItem("dailyNestHabits"));
      if (stored) {
        state.data = stored;
      }
    },
  },
});

export const { toggleHabit, loadHabits } = habitSlice.actions;
export default habitSlice.reducer;
