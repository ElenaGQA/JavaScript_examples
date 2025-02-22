let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

import Manager from "./manager.js"
document.addEventListener("DOMContentLoaded", displayTasks)
let manager = new Manager()

addBtn.addEventListener('click', () => {
    let input = taskInput.value
    if (input !== "") {
        manager.addTask(input)
        displayTasks()
    }
    taskInput.value = ""
})

function displayTasks() {
    taskList.innerHTML = ""
    manager.tasks.forEach(el => {
        let li = document.createElement("li")
        li.className = "task"

        let span = document.createElement("span")
        span.textContent = el.name
        if (el.completed) {
            span.classList.add("complete");
        } else {
            span.classList.remove("complete");
        }

        let completeBtn = document.createElement("button")
        completeBtn.textContent = "Complete"

        let removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove"

        completeBtn.addEventListener('click', () => {
            manager.toggleTaskCompletion(el.id);
            displayTasks()
        })

        removeBtn.addEventListener('click', () => {
            manager.deleteTask(el.id)
            displayTasks()
        })

        li.appendChild(span)
        li.appendChild(completeBtn)
        li.appendChild(removeBtn)
        taskList.appendChild(li)

    });
}

// localStorage.clear()




