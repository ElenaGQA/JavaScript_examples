let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

import Manager from "./manager.js"

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
        console.log(el)
        let li = document.createElement("li")
        li.className = "task"

        let span = document.createElement("span")
        span.textContent = el.name

        let completeBtn = document.createElement("button")
        completeBtn.textContent = "Complete"

        let removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove"

        completeBtn.addEventListener('click', () => {
            let isCompleted = manager.toggleTaskCompletion(el.id);
            if (isCompleted) {
                span.classList.add("complete");
            } else {
                span.classList.remove("complete");
            }
        })

        removeBtn.addEventListener('click', () => {
            manager.deleteTask(el.id)
            
        })

        li.appendChild(span)
        li.appendChild(completeBtn)
        li.appendChild(removeBtn)
        taskList.appendChild(li)

    });
}

// function displayTasks() {
//     taskList.innerHTML = ""
//     manager.tasks.forEach(el => {
//         console.log(el.name, el.completed)

//         let li = document.createElement("li")
//         li.className = "task" 
//         li.innnerHTML = `<span class="${el.completed ? "complete" : ""}"> ${el.name} </span>`

//         let completeBtn = document.createElement("button")
//         completeBtn.textContent = "Complete"

//         let removeBtn = document.createElement("button")
//         removeBtn.textContent = "Remove"

//         completeBtn.addEventListener('click', () => {
//             manager.toggleTaskCompletion(el.id)
//         })

//         removeBtn.addEventListener('click', () => {
//             manager.deleteTask()
//         })

//         li.appendChild(completeBtn)
//         li.appendChild(removeBtn)

//         taskList.appendChild(li)
//     });
// }

displayTasks()

localStorage.clear()




