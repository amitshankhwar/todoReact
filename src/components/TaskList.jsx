import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
};

export default TaskList;
