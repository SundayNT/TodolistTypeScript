// import { useState } from "react";
// import Popup from "./components/todolistpage/Popup";
// import TaskList from "./components/todolistpage/TaskList";
// import AddTaskButton from "./components/todolistpage/AddTaskButton";


// function App() {
//   const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
//   const [newTask, setNewTask] = useState(""); // Store new task input
//   const [tasks, setTasks] = useState<string[]>([]); // Store task list

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
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import ShowTaskCompletePage from "./pages/ShowTaskCompletePage";
import ToDoListPage from "./pages/ToDoListPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShowTaskCompletePage />} />
          <Route path="to-do-list" element={<ToDoListPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
} 
export default App;



