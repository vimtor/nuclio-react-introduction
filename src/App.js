import React from "react";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const tasks = [
  { id: 1, title: "Lavar los platos", completed: false },
  { id: 2, title: "Hacer la compra", completed: true },
  { id: 3, title: "Revisar la clase de victor", completed: false },
  { id: 4, title: "Comprar mascarillas", completed: true },
];

function App() {
  return (
    <section>
      <h1>Que quieres hacer hoy?</h1>
      <input placeholder="Comprar leche" />
      <TaskList tasks={tasks} />
      <Footer tasks={tasks} />
    </section>
  );
}

export default App;
