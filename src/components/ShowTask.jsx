export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = taskList.find((toDoTask) => toDoTask.id === id);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((toDoTask) => toDoTask.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">TODO</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((toDoTask) => (
          <li key={toDoTask.id}>
            <p>
              <span className="name">{toDoTask.name}</span>
              <span className="time">{toDoTask.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(toDoTask.id)}
            ></i>
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
