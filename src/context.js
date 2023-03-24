import React, { useState, createContext } from "react";
export const AppContext = createContext(null);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const contextValue = {
    tasks,
    setTasks,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default TaskProvider;
