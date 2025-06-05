import {Card, TextInput} from "flowbite-react";
import InputSection from "./input-section.jsx";
import TaskItem from "./task-item.jsx";
import ConfirmModal from "./confirm-modal.jsx";
import {getTasksFromLocalStorage , storeTasksToLocalStorage} from "./../features/local-storage.jsx"
import {useEffect, useState} from "react";
import useApi from "./hooks/useApi.jsx";

export default function TaskList() {

    //const [tasks, setTasks] = useState(getTasksFromLocalStorage());
    const [tasks , setTasks] = useState([]);

    //const [tasks , setTasks , error , setError] = useApi();


    useEffect( () => {
        loadTasks()
    }, []);


    const addNewTaskItem = async (task) => {

        let myNewTask = await createNewTaskIntoAPI(task)
        let newTask = [...tasks, myNewTask];
        setTasks(newTask);
    }

    const toggleTodoStatusHandler = async (task) => {
        let myTask = structuredClone(task);
        myTask.done = !myTask.done;
        let status = await updateTaskIntoAPI(myTask);
        if (!status) { return false}
        let newTask = tasks.map(taskItem => {
            if (taskItem.id === task.id) {
                taskItem.done = !taskItem.done;
            }
            return taskItem;
        });
        setTasks(newTask);
        storeTasksToLocalStorage(newTask);
    }

    const handleDeleteTaskRequest = async (task) => {

        let status =  await deleteTaskIntoAPI(task);
        if (!status) { return false}
        let newTask = tasks.filter((taskItem) => {
            return taskItem.id !== task.id
        });
        setTasks(newTask);
    }

    const handleEditTaskRequest = async (task , newTaskName) => {
        let myTask = task;
        myTask.task = newTaskName;
        let status = await updateTaskIntoAPI(myTask);
        if (!status) { return false}
        let newTask = tasks.map( (taskItem) => {
            if (taskItem.id === task.id) {
                taskItem.task = newTaskName;
            }
            return taskItem;
        })

        setTasks(newTask);
    }

    const createNewTaskIntoAPI = async (task) => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/tasks/" , {
                method: "POST",
                headers: {'Content-Type': 'application/json'} ,
                body: JSON.stringify(task),
            });
            const data = await response.json();
            return data
        }catch (error) {
            console.log(error);
            return null;
        }
    }

    const updateTaskIntoAPI = async (task) => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/tasks/" + task.id, {
                method: "PUT",
                headers: {'Content-Type': 'application/json'} ,
                body: JSON.stringify(task),
            })
            if( response.ok ){
                return true;
            }
            return false;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const deleteTaskIntoAPI = async (task) => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/tasks/" + task.id, {
                method: "DELETE",
            })
            if( response.ok ){
                return true;
            }
            return false;

        } catch (error) {
            // console.log(error);
            return false;
        }
    }

    const loadTasks = async() => {
        try {
            let res = await fetch("http://localhost:3000/api/v1/tasks" , {
                method: "GET"
            });
            let tasks = await res.json();
            setTasks(tasks);

        }catch (error) {
            console.log(error);
        }
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