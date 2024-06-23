import { useState } from "react";
import Button from "@Reusable/Button";

const AddTask = () => {
  const [dateTime, setDateTime] = useState("");

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  return (
    <div className="add-task-container">
      <h2>Add New Task</h2>
      <form>
        <div className="input-box">
          <label htmlFor="task-name">Task Name *</label>
          <input type="text" placeholder="Enter the task name" />
        </div>

        <div className="textarea-box">
          <label htmlFor="task-name">Task Description (optional)</label>
          <textarea placeholder="Enter task description" />
        </div>

        <div className="date-box">
          <label htmlFor="task-name">Task Deadline (optional)</label>
          <input
            type="datetime-local"
            value={dateTime}
            name="datetime"
            onChange={handleDateTimeChange}
          />
        </div>

        <div className="select-category-container">
          <label>Category</label>
          <select>
            <option value="home">🏠 Home</option>
            <option value="work">💼 Work</option>
            <option value="personal">👨 Personal</option>
            <option value="health">🏥 Health</option>
            <option value="fitness">🚴‍♀️ Fitness</option>
            <option value="education">📚 Education</option>
          </select>
        </div>

        {/* <select>
          <option value="red">🔴 Red</option>
          <option value="green">🟢 Green</option>
          <option value="blue">🔵 Blue</option>
          <option value="orange">🟠 Orange</option>
          <option value="black">⚫️ Black</option>
        </select> */}

        <Button name="Create Task" className="create-task-button" />
      </form>
    </div>
  );
};

export default AddTask;
