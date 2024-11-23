import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Добавление новой задачи
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  // Удаление задачи
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Переключение статуса задачи
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Туду-лист</h1>
      <div className="task-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите задачу..."
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

