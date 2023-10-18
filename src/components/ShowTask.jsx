export const ShowTask = () => {
  const tasks = [
    { id: 1001, name: "Task 1", time: "2:09:01 AM 9/14/2030" },
    { id: 1002, name: "Task 2", time: "2:09:01 AM 9/14/2030" },
    { id: 1003, name: "Task 3", time: "2:09:01 AM 9/14/2030" },
    { id: 1004, name: "Task 4", time: "2:09:01 AM 9/14/2030" },
  ];

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">TODO</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
