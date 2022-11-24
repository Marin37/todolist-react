import { useContext, useState } from "react";
import App from "../../App";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    // previ
    e.preventDefault();
    console.log("Nota creada");
    console.log("titulo: ", title);
    console.log("descripcion: ", desc);

    // Devuelve el focus al texto
    document.querySelector("input").focus();

    // A tener en cuenta que el createTask está elevado
    // Se ejecuta al nivel de App, no en TaskForm
    createTask({ title, desc });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 rounded-3xl bg-opacity-0 px-20 mx-auto flex  flex-col justify-center items-center"
      >
        <p className="text-sky-600 text-5xl font-extrabold pb-4  uppercase"> To Do list</p>
        <input
          placeholder="Título"
          onChange={(t) => {
            setTitle(t.target.value);
          }}
          value={title}
          className="bg-sky-50 p-2 w-full rounded-xl 
          border-4 border-solid border-sky-50 focus:border-sky-500 opacity-80" 
          autoFocus
        />
        <textarea
          placeholder="Descripción"
          onChange={(d) => {
            setDesc(d.target.value);
          }}
          value={desc}
          className="bg-sky-50 p-2 w-full mt-2 rounded-xl
          border-4 border-solid border-sky-50  opacity-80 focus:border-sky-500"
        ></textarea>
        <button
          disabled={title === "" || desc === ""}
          className="mt-3 bg-sky-600 hover:bg-sky-500 px-5 py-2 rounded-full text-white font-bold"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
