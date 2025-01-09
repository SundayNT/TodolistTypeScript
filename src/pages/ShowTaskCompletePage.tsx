import { useContext } from "react";
import { TasksContext } from "../components/context/TaskContext";

function ShowTaskCompletePage() {
  const {tasks, undoTaskCompletion} = useContext(TasksContext);

  // Filter completed tasks
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="min-h-screen content-center">
      {completedTasks.length > 0 ? (
        <div className="mx-10 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {completedTasks.map((task) => (
            <div
              key={task.id}
              className="flex py-5 w-full flex-col items-center justify-center rounded-lg bg-gray-200 p-2 text-center drop-shadow-lg"
            >
              <div className="mb-2 flex w-full justify-between px-5">
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#78e746] to-[#44b80a] px-3 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-6"
                    color="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <p className="text-xl font-bold text-white">Completed</p>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#577BC1] to-[#38AECC] p-3 text-base font-bold text-white hover:from-[#14469F] hover:to-[#00C1D0] px-3 py-1 rounded-full">
                  <button onClick={() => undoTaskCompletion(task.id)} className="text-xl font-bold text-white">Undo</button>
                </div>
              </div>

              <h1 className="break-all text-3xl">{task.message}</h1>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-4xl font-bold text-gray-700">
          The to-do list is complete. 😊
        </p>
      )}
    </div>
  );
}

export default ShowTaskCompletePage;

