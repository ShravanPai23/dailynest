// src/components/TaskForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuidv4 } from "uuid";

import React from "react";

const Taskform = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(
      addTask({
        id: uuidv4(),
        title,
        description,
        important,
        completed: false,
      })
    );

    setTitle("");
    setDescription("");
    setImportant(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1d4130] text-white p-4 rounded-xl shadow-md mb-6"
    >
      <input
        className="w-full p-2 rounded mb-2 bg-[#121212]"
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 rounded mb-2 bg-[#121212]"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={important}
          onChange={() => setImportant(!important)}
        />
        <span>Mark as Important</span>
      </label>
      <button
        type="submit"
        className="mt-3 px-4 py-2 bg-green-600 rounded hover:bg-green-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default Taskform;
