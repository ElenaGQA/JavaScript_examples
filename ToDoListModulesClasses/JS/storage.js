export function getTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    return tasks
}

export function setTask(taskList) {
    let tasksStringify = JSON.stringify(taskList)
    return localStorage.setItem("tasks", tasksStringify)
}