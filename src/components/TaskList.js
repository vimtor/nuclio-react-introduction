import React from "react";

function TaskItem({ title, completed }) {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <p>{title}</p>
      <span>X</span>
    </li>
  );
}

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(({ id, title, completed }) => (
        <TaskItem key={id} title={title} completed={completed} />
      ))}
    </ul>
  );
}

export default TaskList;
