let input = document.createElement("input")
let button = document.createElement("button")

input.setAttribute('id', 'userInput')
input.setAttribute('placeholder', 'Input your number here')
input.setAttribute('type', 'number')
input.style.fontSize = "20px";
input.style.padding =  "14px 40px";
input.style.borderRadius= "12px";
input.style.color = "black";


button.setAttribute('id', 'btn')
button.innerHTML = "Check the value"
button.style.backgroundColor =  "#f44336";
button.style.fontSize = "20px";
button.style.padding =  "14px 40px";
button.style.borderRadius= "12px";
button.style.color = "black";
button.style.border =  "10px black";

document.body.appendChild(input)
document.body.appendChild(button)

let num = Math.floor(Math.random() * 10 + 1)
let counter = 0;
button.addEventListener('click', () => {
    if (input.value > 10 || input.value <= 0) {
        alert("Input the number between 1 and 10")
        counter++;
    }
    else if (input.value > num) {
        alert("The number is samller")
        counter++;
    }
    else if (input.value < num) {
        alert("The number is bigger")
        counter++;
    }
    else {
        counter++;
        alert(`You guessed the number from ${counter} attempt`)
    }

})

