import { useState } from "react";
import App from "../../App";

function TaskForm(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, " > ", desc);

    // A tener en cuenta que el createTask está elevado
    // Se ejecuta al nivel de App, no en TaskForm
    props.createTask(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="guido xd"
        onChange={(t) => {
          setTitle(t.target.value);
        }}
        value={title}
      />
      <textarea
        placeholder="esta es la desc..."
        onChange={(d) => {
          setDesc(d.target.value);
        }}
        value={desc}
      ></textarea>
      <button> Save </button>
    </form>
  );
}

export default TaskForm;
