// src/pages/Dashboard/Home.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "../../components/Taskform";
import TaskCard from "../../components/TaskCard";
import { setFilter } from "../../features/tasks/taskSlice";

const Home = () => {
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.tasks);
  const tasks = tasksState.tasks;
  const filter = tasksState.filter;

  // Basic filtering with if
  let filteredTasks = tasks;

  if (filter === "completed") {
    filteredTasks = tasks.filter((t) => t.completed === true);
  }

  if (filter === "pending") {
    filteredTasks = tasks.filter((t) => t.completed === false);
  }

  if (filter === "important") {
    filteredTasks = tasks.filter((t) => t.important === true);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Manage Your Tasks</h1>

      <TaskForm />

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => dispatch(setFilter("all"))}
          className="px-4 py-2 rounded bg-green-600"
        >
          all
        </button>
        <button
          onClick={() => dispatch(setFilter("completed"))}
          className="px-4 py-2 rounded bg-green-600"
        >
          completed
        </button>
        <button
          onClick={() => dispatch(setFilter("pending"))}
          className="px-4 py-2 rounded bg-green-600"
        >
          pending
        </button>
        <button
          onClick={() => dispatch(setFilter("important"))}
          className="px-4 py-2 rounded bg-green-600"
        >
          important
        </button>
      </div>

      {/* Task List */}
      <div>
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Home;
