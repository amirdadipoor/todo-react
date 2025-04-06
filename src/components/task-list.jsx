import {Card, TextInput} from "flowbite-react";
import InputSection from "./input-section.jsx";
import TaskItem from "./task-item.jsx";
//import {loadTasksFromLocalStorage , storeTasksToLocalStorage} from "./../features/local-storage.jsx"

export default function TaskList() {
    return (
        <Card className="min-w-2/4">

            <InputSection />

            <ul className="my-4 space-y-3">



                <TaskItem state={true} />
                <TaskItem state={false} />
                <TaskItem state={true} />
                <TaskItem state={false} />




            </ul>



        </Card>
    )
}