import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <li className="task-item">
      <span className="task-text">{task}</span>
      <button className="task-delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Task;
