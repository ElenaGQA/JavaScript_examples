let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

import Manager from "./manager.js"

let manager = new Manager()

addBtn.addEventListener('click', () => {
    let input = taskInput.value
    if (input !== "") {
        manager.addTask(input)
        desplayTasks()
    }
    taskInput.value=""
})

function desplayTasks() {
    taskList.innerHTML = ""
    manager.tasks.forEach(el => {
        let li = document.createElement("li")
        li.innerHTML = el.name
        li.style.display = "flex"
        li.style.justifyContent = "space-between" // all elements are spread out with equal space in between
        li.style.background = "lightgray"
        li.style.margin = "5px 0"
        li.style.alignItems = "center"
        li.style.padding = "5px"
        li.style.borderRadius = "5px"
        
        let span = document.createElement("span")
        span.style.display = "flex"
        span.style.gap = "20px"
        span.style.marginBottom = "8px" // moves element up 

        let completeBtn = document.createElement("button")
        completeBtn.setAttribute('class', 'toggle')
        completeBtn.textContent = "Complete"
        span.appendChild(completeBtn)

        completeBtn.addEventListener('click', () => {
            manager.toggleTaskCompletion()
            // li.style.textDecoration = "line-through"
        })

        let removeBtn = document.createElement("button")
        removeBtn.setAttribute('class', 'delete')
        removeBtn.textContent = "Remove"
        span.appendChild(removeBtn)

        removeBtn.addEventListener('click', () => {
            manager.deleteTask()
        })

        li.appendChild(span)

        taskList.appendChild(li)
    });
}

desplayTasks()

// localStorage.clear()