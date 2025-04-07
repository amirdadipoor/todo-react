

export default function TaskItem({task, deleteTask, toggleTaskState, editTaskTitle}) {
    //console.log(state.state)
    return (
        <>
            <li >
                <a href="javascript:;" className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                    {
                        task?.done ?
                            <svg className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            :
                            <svg className="h-5 w-5 shrink-0 text-gray-600 dark:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  >
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  clipRule="evenodd" />
                            </svg>
                    }
                    <span className={task?.done ? "ml-3 flex-1 whitespace-nowrap text-gray-400 line-through decoration-gray-300" : "ml-3 flex-1 whitespace-nowrap text-gray-500 dark:text-white"}>{task?.task}</span>
                    <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">Popular</span>
                    <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">Popular</span>
                </a>
            </li>
        </>
    )
}