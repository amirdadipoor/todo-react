import {useState} from "react";

const useApi = ( ) => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getTasksFromApi = async ( ) => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/tasks');
            if (!response.ok) {
                throw new Error('Failed to fetch tasks');
            }
            console.log( response.json() );
            const data = await response.json();
            setTasks(data);
        }catch (error) {
            setError(error.message);
        } finally {
            setLoading(false)
        }
    }

    const [tasks , setTasks] = useState(getTasksFromApi());


    return [tasks, setTasks , error , setError];

}

export default useApi;