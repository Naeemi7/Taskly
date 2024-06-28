const TaskDescription = () => {
  return (
    <div className="textarea-box">
      <label htmlFor="task-name">Task Description (optional)</label>
      <textarea placeholder="Enter task description" />
    </div>
  );
};

export default TaskDescription;
