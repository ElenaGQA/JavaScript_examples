// let inp = document.querySelector("#name")
// inp.addEventListener('input', () => inp.value = inp.value.toUpperCase())

// let btn = document.querySelector("#btn")
// btn.addEventListener('click', () => {
//     btn.style.backgroundColor = "green";
//     setTimeout(() => alert("Name was successfully submitted!"), 500)
// })
// btn.addEventListener('mouseover', () => {
//     if (btn.style.backgroundColor !== "green") {
//         btn.style.backgroundColor = "red"
//     }
// })
// btn.addEventListener('mouseout', () => {
//     if (btn.style.backgroundColor !== "green") {
//         btn.style.backgroundColor = "white"
//     }
// })

let inp = document.getElementById("name")
let btn = document.getElementById("btn")

function upperCase() {
    inp.value = inp.value.toUpperCase()
}

function onClick() {
    if (inp.value == "") {
        alert("Fill the name input")
    }
    else {
        btn.style.backgroundColor = "green";
        setTimeout(() => alert("Name was successfully submitted!"), 500)

    }
}
function mOver() {
    if (btn.style.backgroundColor !== "green") {
        btn.style.backgroundColor = "red"
    }
}
function mOut() {
    if (btn.style.backgroundColor !== "green") {
        btn.style.backgroundColor = "white"
    }
}

let item = document.querySelector("#item")
let btn1 = document.querySelector("#button")
let ul = document.querySelector("#elementsList")

btn1.addEventListener('click', () => {
    let list = document.createElement("li")
    list.innerHTML = item.value
    ul.appendChild(list)
    let btn2 = document.createElement('button')
    btn2.innerHTML = "Remove"
    list.appendChild(btn2)
    btn2.addEventListener('click', () => list.remove())
})


