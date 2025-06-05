import {Card, TextInput} from "flowbite-react";
import InputSection from "./input-section.jsx";
import TaskItem from "./task-item.jsx";

import {useTasks} from "./hooks/useTasks.js";

export default function TaskList() {

    const {tasks,
        addNewTaskItem,
        toggleTodoStatusHandler,
        handleDeleteTaskRequest,
        handleEditTaskRequest} = useTasks()


    return (
        <>
            <Card className="min-w-2/4">
                <InputSection addNewTask={addNewTaskItem}  />
                <ul className="my-4 space-y-3">
                    { tasks.map((task, index) => <TaskItem key={index} task={task} deleteTask={handleDeleteTaskRequest} toggleTaskState={toggleTodoStatusHandler} editTaskTitle={handleEditTaskRequest} /> )}
                </ul>
            </Card>
        </>
    )
}