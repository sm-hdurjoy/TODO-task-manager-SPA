// Library Imports
import { useEffect, useState } from "react";

// Components Imports
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

// Styles Imports
import "./App.css";

function App() {
  // State Variable for Task List
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );

  // State Variable for which task is being clicked/selected for Delete and Update
  const [task, setTask] = useState({});

  // Everytime taskList updates, local storage is also updated
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      {/* Navigation Bar component*/}
      <Header />

      {/* Adding a new task form component*/}
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />

      {/* Rendering task list component */}
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
