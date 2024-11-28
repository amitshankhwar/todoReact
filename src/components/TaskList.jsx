import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDelete, onClearAll }) => {


  return (
    <>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={() => onDelete(index)} />
        ))}
      </ul>
      {tasks.length > 0 && <button onClick={onClearAll} className="cleatbtn">clear all</button>}
    </>
  );
};

export default TaskList;
