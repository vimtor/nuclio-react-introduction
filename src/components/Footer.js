import React from "react";

function Footer({ tasks }) {
  const uncheckedTasks = tasks.filter((task) => !task.completed);
  const leftToComplete = uncheckedTasks.length;

  return (
    <footer>
      <div>
        <strong>{leftToComplete}</strong> tasks left.
      </div>
      <button>Load More</button>
    </footer>
  );
}

export default Footer;
