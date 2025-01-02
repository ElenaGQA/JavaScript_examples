let go = document.querySelector("#go")
let pause = document.querySelector(".block")
let sec = 10;
pause.disabled = true;
let flag = false;
let timing;


function startTimer() {
    timing = setInterval(() => {
        go.innerHTML = sec;
        sec--;
        if (sec === -1) {
            clearInterval(timing);
            setTimeout(() => {

                alert("Time's up")
            }, 400)
        }
    }, 500)
}

function pauseTimer() {
    clearInterval(timing);
    flag = true;
}

function resumeTimer() {
    startTimer();
    flag = false;
}

go.addEventListener('click', () => {
    pause.disabled = false;
    pause.classList.remove("block")
    pause.classList.add("pause")
    pause.style.backgroundColor = "#f44336";
    startTimer()
})

pause.addEventListener('click', () => {
    if (sec > 0) {
        if (flag === true) {
            resumeTimer()
            pause.innerHTML = "Pause"
        }
        else {
            pauseTimer()
            pause.innerHTML = "Resume"
        }
    }
})

