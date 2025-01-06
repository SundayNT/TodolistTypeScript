  type AddTaskButtonProps = {
      openPopup: () => void;
    };
  
  function AddTaskButton ({ openPopup }: AddTaskButtonProps) {
    return (
      <div className="flex justify-end">
        <button
          className="rounded-xl bg-purple-600 p-3 text-base font-bold text-white hover:bg-purple-700 active:bg-purple-800 md:text-xl"
          onClick={openPopup} // Open the popup when clicked
        >
          Add Task <span className="text-2xl">+</span>
        </button>
      </div>
    );
  };
  
  export default AddTaskButton;