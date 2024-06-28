import { useState } from "react";

const TaskDeadline = () => {
  const [dateTime, setDateTime] = useState("");

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  return (
    <div className="date-box">
      <label htmlFor="task-name">Task Deadline (optional)</label>
      <input
        type="datetime-local"
        value={dateTime}
        name="datetime"
        onChange={handleDateTimeChange}
      />
    </div>
  );
};

export default TaskDeadline;
