let btnRock = document.querySelector("#buttonRock");
let btnPaper = document.querySelector("#buttonPaper");
let btnScissors = document.querySelector("#buttonScissors");
let btnSubmit = document.querySelector("#buttonSubmit");
let rounds = document.querySelector("#rounds")
let finalScore = document.querySelector("#finalScore")

let choice = ['rock', 'paper', 'scissors'];
let PCchoice = choice[Math.floor(Math.random() * choice.length)];
let userChoice = 0;
let totalRounds = 3;
let userScore = 0;
let PCscore = 0;

function resetButtonColors() {
    btnRock.style.backgroundColor = "green";
    btnPaper.style.backgroundColor = "green";
    btnScissors.style.backgroundColor = "green";
}

function resetGame() {
    userChoice = 0;
    PCchoice = choice[Math.floor(Math.random() * choice.length)];
}

btnRock.addEventListener('click', () => {
    resetButtonColors();
    userChoice = "rock";
    btnRock.style.backgroundColor = "lightgreen";
})

btnPaper.addEventListener('click', () => {
    resetButtonColors();
    userChoice = "paper";
    btnPaper.style.backgroundColor = "lightgreen";
})

btnScissors.addEventListener('click', () => {
    resetButtonColors();
    userChoice = "scissors";
    btnScissors.style.backgroundColor = "lightgreen";
})

btnSubmit.addEventListener('click', () => {
    if (!userChoice) {
        alert("Please, select one of the options!")
        return;
    }

    let result;
    if (totalRounds > 0) {
        if (userChoice === PCchoice) {
            result = "It's a tie!"
            console.log(userChoice)
            console.log(PCchoice)
        }

        else if (userChoice === "rock" && PCchoice === "paper" || userChoice === "paper" && PCchoice === "scissors" || userChoice === "scissors" && PCchoice === "rock") {
            result = "You failed"
            console.log(userChoice)
            console.log(PCchoice)
            PCscore++;
        }
        else {
            result = "You won"
            console.log(userChoice)
            console.log(PCchoice)
            userScore++;
        }
        totalRounds--;
        rounds.innerHTML = `Rounds left ${totalRounds}.`
        alert(result)
        resetButtonColors()
        resetGame()
    }
    if (totalRounds === 0) {
        finalScore.innerHTML = `Final score is ${userScore} for user and ${PCscore} for PC.`
        if (userScore > PCscore) {
            finalScore.innerHTML += "You won!"

        }
        else if (PCscore > userScore) {
            finalScore.innerHTML += " PC won!"
        }
        else {
            finalScore.innerHTML += "It's a tie!"
        }
    }


})

