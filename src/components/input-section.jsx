import {TextInput} from "flowbite-react";
import {useRef} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function InputSection({addNewTask}) {
    const inputValueRef = useRef();

    const addNewTaskItemHandler = () => {
        let todoText = inputValueRef.current.value.trim() ;
        if ((typeof todoText === "string" && todoText.length === 0) || todoText === null )  {
            // show error to user Enter valid data
            showInvalidTaskInputError();
            return false;
        }
        saveAndShowNewTask(todoText);
        inputValueRef.current.value = ''

    }

    const saveAndShowNewTask = (todoText) => {
        //console.log(todoText)
        const newTask = {  task : todoText, done: false };
        //console.log(newTask);
        //console.log(addNewTask);
        addNewTask(newTask);
    }

    const showInvalidTaskInputError = ( ) => {
        //console.log( "Please enter valid task name & try again  !" )
    }

    return (
        <>
            <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">{"Todo List"}</h5>
            <div className="flex mb-4">
                <TextInput id="todo-input" type="text" placeholder="Add a new task" ref={inputValueRef}
                           className=" pr-1 flex-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                           required/>


                <button type="button" onClick={addNewTaskItemHandler} className="justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900" >
                    Add Task
                </button>
            </div>
        </>
    )
}