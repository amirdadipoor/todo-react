import {Card, TextInput} from "flowbite-react";
import InputSection from "./input-section.jsx";
import TaskItem from "./task-item.jsx";
import ConfirmModal from "./confirm-modal.jsx";

import {useEffect, useState} from "react";

import {createTask, deleteTask, getTasks, updateTask} from "../api/tasks/tasksApi.js";

export default function TaskList() {

    const [tasks , setTasks] = useState([]);


    useEffect( () => {
        const loadTaskFromApi = async () => {
            const myTasks = await getTasks();
            setTasks(myTasks);
        }
        loadTaskFromApi();
    }, []);


    const addNewTaskItem = async (task) => {
        let myNewTask = await createTask(task)
        let newTask = [...tasks, myNewTask];
        setTasks(newTask);
    }

    const toggleTodoStatusHandler = async (task) => {
        let myTask = structuredClone(task);
        myTask.done = !myTask.done;
        let status = await updateTask(myTask);
        if (!status) { return false}
        let newTask = tasks.map(taskItem => {
            if (taskItem.id === task.id) {
                taskItem.done = !taskItem.done;
            }
            return taskItem;
        });
        setTasks(newTask);

    }

    const handleDeleteTaskRequest = async (task) => {

        let status =  await deleteTask(task);
        if (!status) { return false}
        let newTask = tasks.filter((taskItem) => {
            return taskItem.id !== task.id
        });
        setTasks(newTask);
    }

    const handleEditTaskRequest = async (task , newTaskName) => {
        let myTask = task;
        myTask.task = newTaskName;
        let status = await updateTask(myTask);
        if (!status) { return false}
        let newTask = tasks.map( (taskItem) => {
            if (taskItem.id === task.id) {
                taskItem.task = newTaskName;
            }
            return taskItem;
        })

        setTasks(newTask);
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