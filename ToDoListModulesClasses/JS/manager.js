import Task from "task.js"
import { getTask, setTask } from "./storage"

export default class Manager {
    constructor() {
        this.tasks = [];
    }

    addTask(taskInput) {
        this.tasks.push(taskInput.value)

    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(item => item.id !== id)
    }
}