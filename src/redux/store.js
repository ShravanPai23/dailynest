// ✅ Make sure this is the content
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import habitReducer from "../features/habits/habitSlice";

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        habits: habitReducer,
    },
});

// ✅ Use default export
export default store;