import Task from "./task.js"
import { getTask, setTask } from "./storage.js"

export default class Manager {
    constructor() {
        this.tasks = getTask();
    }

    addTask(taskInput) {
        let addedTask = new Task(taskInput)
        this.tasks.push(addedTask)
        this.updateStorage()
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(item => item.id !== id)
        this.updateStorage()
    }

    toggleTaskCompletion(id) {
        let task = this.tasks.find(element => element.id === id)
        if (task) {
            task.toggleCompleted()
            this.updateStorage()
            return task.completed
        }
        return null
    }

    updateStorage() {
        let setTasks = setTask(this.tasks)
        return setTasks
    }
}

