// Styles import
import "../styles/AddTask.css"

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    // preventing default form submission action (reload page)
    e.preventDefault();

    // condition check if any task is selected for updating
    if (task.id) {
      const date = new Date(); // Initializing new date for when the task is updated

      // Mapping through the the list to find the task needed to update
      const updatedTasklist = taskList.map((todo) =>
        todo.id === task.id // checking if which task id matches with the selected task to update
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );

      // updating TASK LIST with updated task-todo
      setTaskList(updatedTasklist);
      setTask({});
    } else {
      // otherwise adding new task to task list
      const date = new Date(); // Initializing new date for when a task is created
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      // appending pervious task list with the new added task
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  };

  return (
    // Input box container
    <section className="addTask">
      {/* Form container */}
      <form onSubmit={handleSubmit}>
        {/* Input box */}
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="Add Task . . ."
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />

        {/* Submission button */}
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
