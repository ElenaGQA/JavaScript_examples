let btnBlue = document.querySelector("#buttonBlue");
let btnRed = document.querySelector("#buttonRed");
let btnReset = document.querySelector("#buttonReset");

btnBlue.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "lightblue";
    localStorage.setItem("backgroundColor", "lightblue");
})

btnRed.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "#ff6b33";
    localStorage.setItem("backgroundColor", "#ff6b33");
})

btnReset.addEventListener('click', ()=>{
localStorage.removeItem("backgroundColor")
document.body.style.backgroundColor = ""
})


window.onload = ()=> {
    let savedColor = localStorage.getItem("backgroundColor")
    if (savedColor) {
      document.body.style.backgroundColor = savedColor
    }
  }
  