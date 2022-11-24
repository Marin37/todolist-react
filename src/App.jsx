import React, { useState, useEffect } from "react";
import TaskForm from "./components/cargar/TaskForm";
import TaskList from "./components/lista/TaskList";

function App() {
  return (
    <div>
      <main className="bg-gradient-to-tr from-purple-600 via-sky-500 to-lime-400 h-screen p-10 ">
        <div
          className=" bg-white
        container mx-auto p-6 rounded-3xl bg-opacity-50"
        >
          <TaskForm />
          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default App;
