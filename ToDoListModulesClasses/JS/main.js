let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");
let completeBtn = document.querySelector(".toggle");
let removeBtn = document.querySelector(".delete")

import Manager from "./manager.js"

let manager = new Manager()

addBtn.addEventListener('click', () => {
    let input = taskInput.value
    if (input !== "") {
        manager.addTask(input)
        desplayTasks()
    }
})

function desplayTasks() {
    taskList.innerHTML = ""
    manager.tasks.forEach(el => {
        let li = document.createElement("li")
        li.innerHTML = el.name
    
        let span = document.createElement("span")
  
        let completeBtn = document.createElement("button")
        completeBtn.setAttribute('class', 'toggle')
        completeBtn.textContent = "Complete"
        span.appendChild(completeBtn)

        let removeBtn = document.createElement("button")
        removeBtn.setAttribute('class', 'delete')
        removeBtn.textContent = "Remove"
        span.appendChild(removeBtn)

        li.appendChild(span)

        taskList.appendChild(li)
    });
}

completeBtn.addEventListener('click', ()=>{

})

removeBtn.addEventListener('click', ()=>{

})
// localStorage.clear()