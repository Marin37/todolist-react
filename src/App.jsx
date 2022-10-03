import React, { useState, useEffect } from "react";
import TaskForm from "./components/mostrarLista/TaskForm";
import TaskList from "./components/mostrarLista/TaskList";
import { tasks as data } from "./data/tasks"; // importar tareas con alias "data" para el useeffect>setTasks

function App() {
  // useState con array vacío
  // al estar vacio hace falta cargar los datos
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  // crear funcionalidad añadirtasks
  function createTask(taskTitle, taskDesc) {
    // el operador ... EN ESTE CASO agarra todos los elementos de "tasks" y los mete dentro array
    setTasks([
      ...tasks,
      {
        // y hay que crear el otro objeto
        title: taskTitle,
        id: tasks.length,
        description: taskDesc
      },
    ]);
  }

  return (
    <div>
      <TaskList tasks={tasks} />
      <TaskForm createTask={createTask} />
    </div>
  );
}

export default App;
