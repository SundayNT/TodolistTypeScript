import { useContext } from "react";
import { TasksContext } from "../context/TaskContext";


// type TaskListProps = {
//     tasks: TasksType[];
//   };
  
  
  function TaskList () {
    const {tasks, setTasks} = useContext(TasksContext);

    const handleCheckboxes = (taskId : number) => {
      // Update task status when checkbox is clicked
      setTasks((prevTasks) => 
      prevTasks.map((task) => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
      ));
    }

    return (
      <div className="flex flex-col max-h-56 max-w-xl overflow-auto gap-5 rounded-xl bg-white p-10 text-base drop-shadow-xl md:text-xl">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">To-do list is empty. 😊 </p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="flex items-baseline gap-3 "> 
              <input 
                type="checkbox" 
                id={`task${task.id}`} 
                className="peer" 
                checked={task.completed}
                onChange={() => handleCheckboxes(task.id)}
              />
              <label
                htmlFor={`task${task.id}`}
                className={`w-full break-all ${
                  task.completed ? "text-gray-400 line-through" : ""
                }`}
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