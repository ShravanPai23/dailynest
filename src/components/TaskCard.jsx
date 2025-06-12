// src/components/TaskCard.jsx
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/tasks/taskSlice";

export default function TaskCard({ task }) {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  return (
    <div className="bg-[#1d4130] text-white p-4 rounded-xl shadow-md mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p className="text-sm text-gray-300">{task.description}</p>
          <p className="text-xs mt-1">
            {task.important && (
              <span className="text-yellow-400 mr-2">⭐ Important</span>
            )}
            {task.completed ? "✅ Completed" : "⏳ Pending"}
          </p>
        </div>
        <div className="space-x-2">
          <button
            className="px-3 py-1 bg-green-600 rounded"
            onClick={toggleComplete}
          >
            Toggle
          </button>
          <button
            className="px-3 py-1 bg-red-600 rounded"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
