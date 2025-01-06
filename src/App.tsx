// import { useState } from "react";

// function App() {
//   // State สำหรับจัดการ popup
//   const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
//   const [newTask, setNewTask] = useState(""); // เก็บข้อความใหม่ที่พิมพ์ลงใน input
//   const [tasks, setTasks] = useState<string[]>([]); // เก็บรายการ tasks


//   // ฟังก์ชันสำหรับเปิด popup
//   const openPopup = () => {
//     setIsPopupOpen(true);
//   };

//   // ฟังก์ชันสำหรับปิด popup
//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//   // ฟังก์ชันสำหรับจัดการคลิกนอกกล่อง popup
//   const handleClickOutside = (event: React.MouseEvent) => {
//     const popupElement = document.getElementById("popup-container");
//     if (popupElement && !popupElement.contains(event.target as Node)) {
//       closePopup(); // ถ้าคลิกนอกกล่อง popup ให้ปิดมัน
//     }
//   };

//   // ฟังก์ชันสำหรับเพิ่ม task ลงในรายการ
//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, newTask]); // เพิ่ม task ใหม่ลงใน tasks
//       setNewTask(""); // ล้างข้อความ input
//       closePopup(); // ปิด popup หลังจากเพิ่ม task
//     }
//   };

//   // ฟังก์ชันสำหรับจับการกดปุ่ม Enter
//   const handleKeyDown = (event: React.KeyboardEvent) => {
//     if (event.key === "Enter") {
//       addTask(); // เมื่อกด Enter ให้เพิ่ม task
//     }
//   };

//   return (
//     <div className="relative flex min-h-screen items-center justify-center gap-5">
//       {/* ส่วนของ Popup */}
//       {isPopupOpen && ( 
//         <div
//           className="absolute inset-0 z-[1] flex items-center justify-center bg-black/50"
//           onClick={handleClickOutside} // เมื่อคลิกนอกกล่อง popup จะปิด
//         >
//           <div id="popup-container" className="mx-5 h-[20.5rem] w-96 rounded-lg bg-white">
//             <div className="flex items-center justify-between">
//               <div className="ml-6 mt-6 flex h-14 w-14 items-center justify-center rounded-lg border-[1px] border-gray-300 p-2 shadow-md">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-10"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
//                   />
//                 </svg>
//               </div>
//               <button
//                 className="mr-6 flex h-8 w-8 items-center justify-center rounded-lg border-[1px] border-gray-300 p-1 shadow-sm hover:bg-gray-100 active:bg-gray-200"
//                 onClick={closePopup}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="size-4"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <div className="px-6 pt-6">
//               <h2 className="pb-1 text-xl font-extrabold">To do list</h2>
//               <p className="text-base text-slate-700">Please enter a task name to do.</p>
//             </div>
//             <form action="submit" className="m-6">
//               <input
//                 type="text"
//                 placeholder="New Task"
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)} // อัปเดตค่า newTask ตามที่พิมพ์
//                 onKeyDown={handleKeyDown} // จับการกดปุ่มบนคีย์บอร์ด
//                 className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </form>
//             <div className="mx-6 flex justify-end">
//               <button
//                 onClick={addTask} // เมื่อกดปุ่มนี้ให้เพิ่ม task
//                 className="rounded-lg bg-purple-600 px-5 py-3 font-bold text-white hover:bg-purple-700 active:bg-purple-800"
//               >
//                 Add Task <span className="text-2xl">+</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ส่วนของเนื้อหาหลัก */}
//       <div className="mx-5 flex flex-col gap-5">
//         <div className="flex justify-end">
//           <button
//             className="rounded-xl bg-purple-600 p-3 text-base font-bold text-white hover:bg-purple-700 active:bg-purple-800 md:text-xl"
//             onClick={openPopup} // เมื่อกดปุ่มนี้จะเปิด popup
//           >
//             Add Task <span className="text-2xl">+</span>
//           </button>
//         </div>

//         {/* แสดงรายการ Task หรือแสดงข้อความว่า "Don't have list to do" หากยังไม่มี task */}
//         <div className="mx-auto flex flex-col items-start justify-start gap-5 rounded-xl bg-white p-10 text-base drop-shadow-xl md:text-xl">
//           {tasks.length === 0 ? (
//             <p className="text-center text-gray-500">To-do list is empty. 😊 </p>
//           ) : (
//             tasks.map((task, index) => (
//               <div key={index} className="flex items-baseline gap-3">
//                 <input type="checkbox" id={`task${index}`} className="peer"/>
//                 <label
//                   htmlFor={`task${index}`}
//                   className="w-full break-all peer-checked:text-gray-400 peer-checked:line-through"
//                 >
//                   {task}
//                 </label>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import Popup from "./components/Popup";
import TaskList from "./components/TaskList";
import AddTaskButton from "./components/AddTaskButton";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState(""); // Store new task input
  const [tasks, setTasks] = useState<string[]>([]); // Store task list

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
      setTasks([...tasks, newTask]);
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
  );
}

export default App;
