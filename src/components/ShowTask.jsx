// Styles Import
import "../styles/ShowTask.css";

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  // function to handle which task is being selected/clicked for editing
  const handleEdit = (id) => {
    // filtering to find which task is selected by matching ID
    const selectedTask = taskList.find((toDoTask) => toDoTask.id === id);
    setTask(selectedTask);
  };

  // function to delete selected/clicked task
  const handleDelete = (id) => {
    // filtering to find which task is selected by matching ID to delete
    const updatedTaskList = taskList.filter((toDoTask) => toDoTask.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    // Body container
    <section className="showTask">
      {/* Body Header container */}
      <div className="head">
        {/* Body Title and task count container */}
        <div>
          <span className="title">TODO</span>
          <span className="count">{taskList.length}</span>
        </div>

        {/* Button to clear all task */}
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>

      {/* Unordered list to show task list */}
      <ul>
        {/* Mapping through taskList item */}
        {taskList.map((toDoTask) => (
          // individual list item for each task
          <li key={toDoTask.id}>
            <p>
              {/* Task Name and Created at time */}
              <span className="name">{toDoTask.name}</span>
              <span className="time">{toDoTask.time}</span>
            </p>
            {/* Edit button */}
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(toDoTask.id)}
            ></i>
            {/* delete button */}
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(toDoTask.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
