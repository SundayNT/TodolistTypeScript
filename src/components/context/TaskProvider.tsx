import { ReactNode, useMemo, useState } from "react";
import { TasksContext, TasksType } from "./TaskContext";

export type TaskProviderProps = {
    children: ReactNode;
};

export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<TasksType[]>([]); // Store task list

    const value = useMemo(
        () => ({ 
            tasks,
            setTasks 
        }), [tasks] );

    return ( 
    <TasksContext.Provider value={value}>
        {children}
    </TasksContext.Provider>
    );
}
