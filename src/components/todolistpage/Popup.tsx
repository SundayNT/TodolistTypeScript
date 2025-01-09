import React, { memo } from "react";

type PopupProps = {
  isPopupOpen: boolean;
  closePopup: () => void;
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
};

function Popup({ isPopupOpen, closePopup, newTask, setNewTask, addTask }: PopupProps) {
  // const handleKeyDown = (event: React.KeyboardEvent) => {
  //   if (event.key === "Enter") {
  //     addTask(); // Add task when Enter is pressed
  //   }
  // };

  const handleClickOutside = (event: React.MouseEvent) => {
    const popupElement = document.getElementById("popup-container");
    if (popupElement && !popupElement.contains(event.target as Node)) {
      closePopup();
    }
  };

  if (!isPopupOpen) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission
    addTask(); // Call addTask function
  };

  // console.log(1)
  // console.log(newTask)

  return (
    <div
      className="absolute inset-0 z-[1] flex items-center justify-center bg-black/50"
      onClick={handleClickOutside}
    >
      <div id="popup-container" className="mx-5 h-[20.5rem] w-96 rounded-lg bg-white">
        <div className="flex items-center justify-between">
          <div className="ml-6 mt-6 flex h-14 w-14 items-center justify-center rounded-lg border-[1px] border-gray-300 p-2 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </div>
          <button
            className="mr-6 flex h-8 w-8 items-center justify-center rounded-lg border-[1px] border-gray-300 p-1 shadow-sm hover:bg-gray-100 active:bg-gray-200"
            onClick={closePopup}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 pt-6">
          <h2 className="pb-1 text-xl font-extrabold">To do list</h2>
          <p className="text-base text-slate-700">Please enter a task name to do.</p>
        </div>
        <form onSubmit={handleSubmit} className="m-6">
          <input
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} // Update newTask value
            //onKeyDown={handleKeyDown} // Handle Enter key
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-4 flex justify-end">
            <button
              //onClick={addTask} // Add task when button is clicked
              type="submit"
              className="rounded-lg bg-gradient-to-r from-[#00C1D0] to-[#14469F] px-5 py-3 text-lg font-bold text-white transition duration-150 ease-in-out hover:-translate-x-1 hover:scale-110 hover:from-[#38AECC] hover:to-[#022F40]"
            >
              Add Task <span className="text-2xl">+</span>
            </button>
          </div>
        </form>
        {/* <div className="mx-6 flex justify-end">
          <button
            onClick={addTask} // Add task when button is clicked
            className="rounded-lg bg-purple-600 px-5 py-3 font-bold text-white hover:bg-purple-700 active:bg-purple-800"
          >
            Add Task <span className="text-2xl">+</span>
          </button>
        </div> */}
      </div>
    </div>
  );
}

const PopupMemo = memo(Popup);
export default PopupMemo;
