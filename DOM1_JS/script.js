let container = document.querySelector(".container")
container.style.backgroundColor = "lightblue"

let demo = document.querySelector("#demo")
demo.innerHTML = "JS changed me"

let btn = document.querySelector("#btn")
let link = document.querySelector("#link")

btn.addEventListener('click', () => link.setAttribute("href", "https://www.wunderground.com/weather/ca/kleinburg"))

console.log("test2")



// let container = document.getElementsByClassName("container")
// container[0].style.backgroundColor = "lightblue"

// let demo = document.getElementById("demo")
// demo.innerHTML = "JS changed me"




