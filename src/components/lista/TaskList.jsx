import React, { useContext } from "react";
import TaskCard from "./TaskCard";
// import './task.scss'
import { TaskContext } from "../../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1
    className="text-sky-600 text-5xl font-extrabold pb-10 pt-12 uppercase first-letter:
    flex  flex-col justify-center items-center"
    >¡No quedan tareas! 😎</h1>;
  }

  // triple igual para verificar valor y tipo
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 px-2 pb-2 pt-8">
      {/* Keep Ii Mind para tratar cada elemento usamos el de la propiedad dentro del map */}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
