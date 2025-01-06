// import { useState } from "react";
// import Popup from "../components/todolistpage/Popup";
// import AddTaskButton from "../components/todolistpage/AddTaskButton";
// import TaskList from "../components/todolistpage/TaskList";


// function ToDoListPage() {
//     const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
//     const [newTask, setNewTask] = useState(""); // Store new task input
//     const [tasks, setTasks] = useState<string[]>([]); // Store task list

//   // Open popup
//   const openPopup = () => {
//     setIsPopupOpen(true);
//   };

//   // Close popup
//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//   // Add new task to the list
//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, newTask]);
//       setNewTask(""); // Clear input after adding task
//       closePopup(); // Close popup after adding task
//     }
//   };

//   return (
//     <div className="relative flex min-h-screen items-center justify-center gap-5">
//       {/* Popup Component */}
//       <Popup
//         isPopupOpen={isPopupOpen}
//         closePopup={closePopup}
//         newTask={newTask}
//         setNewTask={setNewTask}
//         addTask={addTask}
//       />

//       {/* Main Content */}
//       <div className="mx-5 flex flex-col gap-5">
//         {/* Add Task Button */}
//         <AddTaskButton openPopup={openPopup} />

//         {/* Task List Component */}
//         <TaskList tasks={tasks} />
//       </div>
//     </div>
//   )
// }

// export default ToDoListPage;


import { useState } from "react";
import Popup from "../components/todolistpage/Popup";
import AddTaskButton from "../components/todolistpage/AddTaskButton";
import TaskList from "../components/todolistpage/TaskList";

export interface TasksType {
  id: number;
  message: string;
}

function ToDoListPage() {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [newTask, setNewTask] = useState(""); // Store new task input
    const [tasks, setTasks] = useState<TasksType[]>([]); // Store task list

  // Open popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Close popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Add new task to the list
  const addTask = () => {
    if (newTask.trim()) {
      const newTaskType = {
        id: Date.now(), // or use another method to generate unique IDs
        message: newTask
      }
      setTasks([...tasks, newTaskType]);
      setNewTask(""); // Clear input after adding task
      closePopup(); // Close popup after adding task
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center gap-5">
      {/* Popup Component */}
      <Popup
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />

      {/* Main Content */}
      <div className="mx-5 flex flex-col gap-5">
        {/* Add Task Button */}
        <AddTaskButton openPopup={openPopup} />

        {/* Task List Component */}
        <TaskList tasks={tasks} />
      </div>
    </div>
  )
}

export default ToDoListPage;
