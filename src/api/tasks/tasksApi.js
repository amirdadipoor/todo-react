import {adaptTasksResponse, adaptTaskToApi} from "./taskAdapter.js";
import {getConfig} from "../apiConfig.js";

const BASE_URL = 'http://localhost:3000/api/v1';

export const getTasks = async () => {
    const data = await fetchApi('/tasks' );
    return adaptTasksResponse(data);
}

export const createTask = async (task) => {
    const payload = adaptTaskToApi(task);
    const data = await fetchApi('/tasks' , getConfig({
        method: 'POST',
        body : payload
    }));
    return data;
}

export const deleteTask = async (task) => {
    const data = await fetchApi(`/tasks/${task.id}` , {
        method: 'DELETE'
    });
    return data;
}

export const updateTask = async (task) => {
    const payload = adaptTaskToApi(task);
    const response = await fetchApi(`/tasks/${task.id}` , getConfig({
        method: 'PUT',
        body: payload
    }));
    return response;
}

const fetchApi = async (endpoint ,config) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);
        if (!response.ok) {
            const error = await response.json();
            throw new Error( `${response.status}` + ' ' + `${error.message}` || 'API request failed');
        }
        return response.json();
    }catch(err) {
        return null;
    }
}