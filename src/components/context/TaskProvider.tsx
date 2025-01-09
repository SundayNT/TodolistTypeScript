import { ReactNode, useMemo, useState } from "react";
import { TasksContext, TasksType } from "./TaskContext";

export type TaskProviderProps = {
    children: ReactNode;
};

export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<TasksType[]>([]); // Store task list

    // ฟังก์ชันสำหรับ undo การทำงาน (ย้อนกลับสถานะจาก completed เป็น false)
    const undoTaskCompletion = (taskId: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: false } : task
            )
        );
    };

    const value = useMemo(
        () => ({ 
            tasks,
            setTasks,
            undoTaskCompletion,  // เพิ่มฟังก์ชัน undo
        }), [tasks] );

    return ( 
    <TasksContext.Provider value={value}>
        {children}
    </TasksContext.Provider>
    );
}
