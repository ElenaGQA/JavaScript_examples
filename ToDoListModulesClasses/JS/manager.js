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
        this.tasks.forEach(element => {
            if (element.id == id) {
                element.toggleCompleted()
                return
            }
        })
        this.updateStorage()
    }

    updateStorage() {
        let setTasks = setTask(this.tasks)
        return setTasks
    }
}

