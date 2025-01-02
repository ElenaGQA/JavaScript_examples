let btn = document.querySelector("#btn")

btn.addEventListener('click', () => {
    let text = document.createElement("p")
    text.setAttribute('id', 'text')
    text.innerHTML = "This is notification message"
    document.body.appendChild(text)
    setTimeout(() => text.remove(), 3000)
})

let item = document.querySelector("#item")
let btnShoppingList = document.querySelector("#btnShoppingList")
let ul = document.querySelector("#elementsList")

btnShoppingList.addEventListener('click', () => {
    let list = document.createElement("li")
    list.innerHTML = item.value


    let crossOutButton = document.createElement("button")
    crossOutButton.innerHTML = "Cross Out"
    list.appendChild(crossOutButton)
    crossOutButton.addEventListener('click', () => {

        if (list.style.textDecoration == "none") {
            list.style.textDecoration = 'line-through'
        }
        else {
            list.style.textDecoration = "none"
        }
    })

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    list.appendChild(deleteButton)
    deleteButton.addEventListener('click', () =>
        list.remove()
    )

    ul.appendChild(list)

    item.value = ""

})

