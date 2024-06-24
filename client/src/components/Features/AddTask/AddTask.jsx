import { useState } from "react";
import Button from "@reusable/Button";
import Input from "@reusable/Input";
import TaskDescription from "./TaskDescription";
import TaskDeadline from "./TaskDeadline";
import TaskCategory from "./TaskCategory";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  return (
    <div className="main-container">
      <div className="add-task-container">
        <h2>Add New Task</h2>
        <form>
          <Input
            labelName="Task Name *"
            inputType="text"
            inputValue={taskName}
            placeholder="Enter the task name"
            onChange={(e) => setTaskName(e.target.value)}
          />
          <TaskDescription />
          <TaskDeadline />
          <TaskCategory />
          <Button name="Create Task" />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
