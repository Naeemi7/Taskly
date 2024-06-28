import TaskCard from "@reusable/TaskCard";

const HomePage = () => {
  const tasks = [{ title: "chap" }];

  return (
    <main className="main-container">
      {tasks.length > 0 ? (
        <TaskCard tasks={tasks} />
      ) : (
        <div className="main-without-tasks">
          <h4>You don&apos;t have any tasks yet</h4>
          <p>
            Click on the <strong>+</strong> button to add one
          </p>
        </div>
      )}
    </main>
  );
};

export default HomePage;
