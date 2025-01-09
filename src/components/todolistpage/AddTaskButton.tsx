type AddTaskButtonProps = {
  openPopup: () => void;
};

function AddTaskButton({ openPopup }: AddTaskButtonProps) {
  return (
    <div className="flex justify-end">
      {/* <button
          className="rounded-xl bg-purple-600 p-3 text-base font-bold text-white hover:bg-purple-700 active:bg-purple-800 md:text-xl"
          onClick={openPopup} // Open the popup when clicked
        > */}
      <button
        className="rounded-xl bg-gradient-to-r from-[#00C1D0] to-[#14469F] p-3 text-base font-bold text-white transition duration-150 ease-in-out hover:-translate-x-1 hover:scale-110 hover:from-[#38AECC] hover:to-[#022F40] md:text-xl"
        onClick={openPopup} // Open the popup when clicked
      >
        Add Task <span className="text-2xl">+</span>
      </button>
    </div>
  );
}

export default AddTaskButton;
