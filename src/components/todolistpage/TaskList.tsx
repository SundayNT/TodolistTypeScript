type TaskListProps = {
    tasks: string[];
  };
  
  // const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  //   return (
  //     <div className="mx-auto flex flex-col items-start justify-start gap-5 rounded-xl bg-white p-10 text-base drop-shadow-xl md:text-xl">
  //       {tasks.length === 0 ? (
  //         <p className="text-center text-gray-500">To-do list is empty. 😊 </p>
  //       ) : (
  //         tasks.map((task, index) => (
  //           <div key={index} className="flex items-baseline gap-3">
  //             <input type="checkbox" id={`task${index}`} className="peer" />
  //             <label
  //               htmlFor={`task${index}`}
  //               className="w-full break-all peer-checked:text-gray-400 peer-checked:line-through"
  //             >
  //               {task}
  //             </label>
  //           </div>
  //         ))
  //       )}
  //     </div>
  //   );
  // };
  
  // export default TaskList;
  
  function TaskList ({ tasks }: TaskListProps) {
    return (
      <div className="mx-auto flex flex-col items-start justify-start gap-5 rounded-xl bg-white p-10 text-base drop-shadow-xl md:text-xl">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">To-do list is empty. 😊 </p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} className="flex items-baseline gap-3">
              <input type="checkbox" id={`task${index}`} className="peer" />
              <label
                htmlFor={`task${index}`}
                className="w-full break-all peer-checked:text-gray-400 peer-checked:line-through"
              >
                {task}
              </label>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default TaskList;