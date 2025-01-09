import { createContext } from "react";

export interface TasksType {
    id: number;
    message: string;
    completed: boolean; // Add completed field
}

export type UserContextTasksType = {
    tasks: TasksType[];
    setTasks: React.Dispatch<React.SetStateAction<TasksType[]>>;
    undoTaskCompletion: (taskId: number) => void;  // เพิ่มฟังก์ชันสำหรับ undo
};

export const TasksContext = createContext<UserContextTasksType> ({
    tasks: [],
    setTasks: () => {
        throw new Error("setTasks function must be overridden");
    },
    undoTaskCompletion: () => {
        throw new Error("undoTaskCompletion function must be overridden");
    },
})