const wordDiv = document.querySelector("#word")
const wrongDiv = document.querySelector("#wrongLetters")
const message = document.querySelector("#message")
const keyboard = document.querySelector("#keyboard")
const restartBtn = document.querySelector("#restartBtn")

let definedWords = ["function", "javascript", "code", "method", "iteration", "assignment", "class", "variable"]

let rendomWord = "";
let correctLetters = [];
let wrongLetters = [];

function generateKeyboard() {
    const letters = "abcdefghijklmnopqrstuvwxyz"
    keyboard.innerHTML = ""


    letters.split("").forEach((letter) => {
        let button = document.createElement("button")
        button.innerHTML = letter
        keyboard.appendChild(button)
        button.classList.add("keyboardLetter")

        button.addEventListener('click', (e) => {
            let letterBtn = document.querySelectorAll('.keyboardLetter')
            let target = e.target
            let letter = target.textContent
            target.disabled = true

            if (rendomWord.includes(letter)) {
                correctLetters.push(letter)
                hiddenWord()

                let allCorrect = true;
                for (let el of rendomWord) {
                    if (!correctLetters.includes(el)) {
                        allCorrect = false
                        return
                    }
                }
                if (allCorrect) {
                    message.innerHTML = "You guessed the word!"
                    message.style.color = "green"
                    letterBtn.forEach((el) => el.disabled = true)
                }

            }
            else {
                wrongLetters.push(letter)
                if (wrongLetters.length == 6) {
                    message.innerHTML = `You lost! The word is: ${rendomWord}`
                    message.style.color = "red"
                    letterBtn.forEach((el) => el.disabled = true)
                }
                wrongDiv.innerHTML = wrongLetters.join(" ")
            }
        })
    })

}


function init() {
    rendomWord = definedWords[Math.floor(Math.random() * definedWords.length)]
    correctLetters = [];
    wrongLetters = [];
    message.innerHTML = "";
    hiddenWord()
    generateKeyboard()
}

function hiddenWord() {
    let hiddenWord = rendomWord.split("").map((letter) => {
        if (correctLetters.includes(letter)) {
            return letter
        }
        else return " _"
    }).join(" ")
    wordDiv.innerHTML = hiddenWord;

}
restartBtn.addEventListener('click', () => {
    init()
    wrongDiv.innerHTML = ""
})

init() 