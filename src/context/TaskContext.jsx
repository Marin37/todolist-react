import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; // importar tareas con alias "data" para el useeffect>setTasks


export const TaskContext = createContext();

export function TaskContextProvider(props) {
  // useState con array vacío
  // al estar vacio hace falta cargar los datos
  const [tasks, setTasks] = useState([]);

  // crear funcionalidad añadir tasks
  function createTask(task) {
    // el operador ... EN ESTE CASO agarra todos los elementos de "tasks" y los mete dentro array
    setTasks([
      ...tasks,
      {
        // y hay que crear el otro objeto
        title: task.title,
        id: tasks.length,
        description: task.desc,
      },
    ]);
  }

  // eliminar tasks
  function deleteTask(taskId) {
    console.log(tasks);
    console.log(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
