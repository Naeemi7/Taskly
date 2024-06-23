import taskCategoryOptions from "@data/taskCategoryOptions";

const TaskCategory = () => {
  return (
    <div className="select-category-container">
      <label>Category</label>
      <select>
        {taskCategoryOptions.map((option, index) => (
          <option value={option.value} key={index}>
            {option.emoji} {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskCategory;
