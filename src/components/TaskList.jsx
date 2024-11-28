import React from "react";
import Task from "./Task";
import { Button } from "./Button";

const TaskList = ({ tasks, onDelete, onClear }) => {
  return (
    <>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={() => onDelete(index)} />
        ))}
      </ul>
      {tasks.length !== 0 && 
      <Button onClear={onClear}></Button>}
    </>
  );
};

export default TaskList;
