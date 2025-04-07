import {Card, TextInput} from "flowbite-react";
import InputSection from "./input-section.jsx";
import TaskItem from "./task-item.jsx";
import {getTasksFromLocalStorage , storeTasksToLocalStorage} from "./../features/local-storage.jsx"
import {useState} from "react";

export default function TaskList() {
    //console.log(loadTasksFromLocalStorage())
    const [tasks, setTasks] = useState(getTasksFromLocalStorage());

    const addNewTaskItem = (task) => {
        let newTask = [...tasks, task];
        setTasks(newTask);
        storeTasksToLocalStorage(newTask);
    }

    return (
        <Card className="min-w-2/4">

            <InputSection addNewTask={addNewTaskItem}  />

            <ul className="my-4 space-y-3">

                { tasks.map((task, index) => <TaskItem key={index} task={task} deleteTask={null} toggleTaskState={null} editTaskTitle={null} /> )}

                {/*<TaskItem state={true} />
                <TaskItem state={false} />
                <TaskItem state={true} />
                <TaskItem state={false} />*/}




            </ul>



        </Card>
    )
}