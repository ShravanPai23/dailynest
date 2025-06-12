// src/features/tasks/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from "../../utils/localStorage";

// ✅ Get email safely without optional chaining
let email = "";
const userData = localStorage.getItem("dailyNestToken");
if (userData) {
    try {
        email = JSON.parse(userData).email || "";
    } catch (err) {
        email = "";
    }
}

const initialState = {
    tasks: loadTasksFromLocalStorage(email),
    filter: "all",
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            saveTasksToLocalStorage(email, state.tasks);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            saveTasksToLocalStorage(email, state.tasks);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
                saveTasksToLocalStorage(email, state.tasks);
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, deleteTask, updateTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;