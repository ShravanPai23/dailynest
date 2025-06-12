// src/utils/localStorage.js

export const saveTasksToLocalStorage = (email, tasks) => {
  localStorage.setItem(`tasks-${email}`, JSON.stringify(tasks));
};

export const loadTasksFromLocalStorage = (email) => {
  const data = localStorage.getItem(`tasks-${email}`);
  return data ? JSON.parse(data) : [];
};
