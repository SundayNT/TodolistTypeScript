import { TasksType } from "../../pages/ToDoListPage";

type TaskListProps = {
    tasks: TasksType[];
  };
  
  
  function TaskList ({ tasks }: TaskListProps) {
    return (
      <div className="mx-auto flex flex-col items-start justify-start gap-5 rounded-xl bg-white p-10 text-base drop-shadow-xl md:text-xl">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">To-do list is empty. 😊 </p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="flex items-baseline gap-3">
              <input type="checkbox" id={`task${task.id}`} className="peer" />
              <label
                htmlFor={`task${task.id}`}
                className="w-full break-all peer-checked:text-gray-400 peer-checked:line-through"
              >
                {task.message}
              </label>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default TaskList;