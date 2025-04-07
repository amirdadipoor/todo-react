import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



export default function TaskItem({task, deleteTask, toggleTaskState, editTaskTitle}) {

    //console.log(state.state)
    const handleClickToggle = () => {
        //console.log(task , toggleTaskState)
        toggleTaskState(task)
    }

    const handleRequestDeleteTask = () => {
        let appTheme = localStorage.getItem("theme")
        withReactContent(Swal).fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            showCloseButton: true,
            background: appTheme === "dark" ? '#1f2937' : '#ffffff', // dark gray (matches Tailwind dark)
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                deleteTask(task)

                withReactContent(Swal).fire({
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success",
                    timer: 3000,
                    background: appTheme === "dark" ? '#1f2937' : '#ffffff', // dark gray (matches Tailwind dark)
                    showCloseButton: true,
                    timerProgressBar: true,
                });
            }
        });
    }

    return (
        <>
            <li >
                <a onClick={(event) => event.preventDefault()} href="#" className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                    {
                        task?.done ?
                            <svg onClick={handleClickToggle} className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            :
                            <svg onClick={handleClickToggle} className="h-5 w-5 shrink-0 text-gray-600 dark:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  >
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  clipRule="evenodd" />
                            </svg>
                    }
                    <span className={task?.done ? "ml-3 flex-1 whitespace-nowrap text-gray-400 line-through decoration-gray-300" : "ml-3 flex-1 whitespace-nowrap text-gray-500 dark:text-white"} onClick={handleClickToggle}>{task?.task}</span>
                    <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">Popular</span>
                    <span className="ml-3 inline-flex items-center justify-center rounded bg-red-500 px-2 py-0.5 text-xs font-medium text-red-900 dark:bg-red-400 dark:text-red-700" onClick={handleRequestDeleteTask }>Delete</span>
                </a>
            </li>
        </>
    )
}