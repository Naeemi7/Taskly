import Button from "@Reusable/Button";
import TaskName from "./TaskName";
import TaskDescription from "./TaskDescription";
import TaskDeadline from "./TaskDeadline";
import TaskCategory from "./TaskCategory";

const AddTask = () => {
  return (
    <div className="add-task-container">
      <h2>Add New Task</h2>
      <form>
        <TaskName />
        <TaskDescription />
        <TaskDeadline />
        <TaskCategory />
        <Button name="Create Task" className="create-task-button" />
      </form>
    </div>
  );
};

export default AddTask;
