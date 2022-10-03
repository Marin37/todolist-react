import React from "react";
import TaskCard from "./TaskCard";
// import './task.scss'

function TaskList(props) {
  // triple igual para verificar valor y tipo
  return (
    <div>
      {/* Keep Ii Mind para tratar cada elemento usamos el de la propiedad dentro del map */}
      {props.tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
