import { useState, useEffect } from 'react';
import {createTask, deleteTask, getTasks, updateTask} from "./../../api/tasks/tasksApi.js";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const loadTaskFromApi = async () => {
        const myTasks = await getTasks();
        setTasks(myTasks);
    }

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


    useEffect( () => {
        loadTaskFromApi();
    }, []);

    return {
        tasks,
        addNewTaskItem,
        toggleTodoStatusHandler,
        handleDeleteTaskRequest,
        handleEditTaskRequest,
        reload : loadTaskFromApi
    }

}