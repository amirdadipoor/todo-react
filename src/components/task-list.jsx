import {Card, TextInput} from "flowbite-react";
import InputSection from "./input-section.jsx";
import TaskItem from "./task-item.jsx";
import ConfirmModal from "./confirm-modal.jsx";
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

    const toggleTodoStatusHandler = (task) => {
        let newTask = tasks.map(taskItem => {
            if (taskItem.id === task.id) {
                taskItem.done = !taskItem.done;
            }
            return taskItem;
        });
        setTasks(newTask);
        storeTasksToLocalStorage(newTask);
    }

    const handleDeleteTaskRequest = (task) => {
        //console.log(task);
        let newTask = tasks.filter((taskItem) => {
            return taskItem.id !== task.id
        });
        setTasks(newTask);
        storeTasksToLocalStorage(newTask);
    }

    const handleEditTaskRequest = (task , newTastName) => {
        //console.log(task, newTastName);
        let newTask = tasks.map( (taskItem) => {
            if (taskItem.id === task.id) {
                taskItem.task = newTastName;
            }
            return taskItem;
        })
        //console.log(newTask);
        setTasks(newTask);
        storeTasksToLocalStorage(newTask);
    }

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