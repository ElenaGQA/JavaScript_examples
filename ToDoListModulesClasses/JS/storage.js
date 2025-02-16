import Task from "./task.js"
export function getTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    return tasks.map(el => new Task(el.name, el.completed))
}

export function setTask(taskList) {
    let tasksStringify = JSON.stringify(taskList)
    return localStorage.setItem("tasks", tasksStringify)
}