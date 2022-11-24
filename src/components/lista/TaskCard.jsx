import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div
      key={task.id}
      className="bg-white p-5 rounded-xl bg-opacity-50
    border-solid hover:border-sky-600"
    >
      <h1 className="text-xl font-extrabold text-sky-600 capitalize">{task.title}</h1>
      <p className="text-sky-600 font-semibold text-sm">{task.description}</p>
      <button onClick={() => deleteTask(task.id)}
      className="bg-blue-300 hover:bg-rose-300 font-semibold px-3 py-1 rounded-lg mt-4">Eliminar</button>
    </div>
  );
}

export default TaskCard;
