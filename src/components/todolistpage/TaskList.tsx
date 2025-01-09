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

    const handleDelete = (taskId : number) => {
      // Delete task when delete button is clicked
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }

    return (
      <div className="flex flex-col max-h-72 max-w-xl overflow-auto gap-5 rounded-xl bg-white p-10 text-base drop-shadow-xl md:text-xl">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">To-do list is empty. 😊 </p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="flex items-baseline gap-3 "> 
              <input 
                type="checkbox" 
                id={`task${task.id}`} 
                className="peer cursor-pointer" 
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
              <div className="flex gap-3">
                <button onClick={() => handleDelete(task.id)} className="translate-y-[0.1rem]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5  hover:text-[#8f0029]" color="#ff4d4d">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default TaskList;