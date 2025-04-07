
let storageName = "ApplicationStorage";

export function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem(storageName)) || [] ;
}

export function storeTasksToLocalStorage(data = [] ) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
}