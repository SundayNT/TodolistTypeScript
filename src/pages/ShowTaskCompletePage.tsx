import { useContext } from "react";
import { TasksContext } from "../components/context/TaskContext";

function ShowTaskCompletePage() {
  const {tasks} = useContext(TasksContext);

  // Filter completed tasks
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="min-h-screen content-center">
      {completedTasks.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-4 m-2 md:grid-cols-2 gap-x-4 lg:grid-cols-3">
          {completedTasks.map((task) => (
          <div key={task.id} className="bg-purple-600 text-center rounded-lg text-white">
            <h1>{task.message}</h1>
          </div>
        ))}
      </div>
      ) : (
        <p className="text-4xl font-bold text-center text-gray-700">The to-do list is complete. 😊 </p>
      )}
    </div>
  )
}

export default ShowTaskCompletePage;
