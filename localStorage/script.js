let btnBlue = document.querySelector("#buttonBlue");
let btnRed = document.querySelector("#buttonRed");

btnBlue.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "lightblue";
    localStorage.setItem("backgroundColor", "lightblue");
})

btnRed.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "#ff6b33";
    localStorage.setItem("backgroundColor", "#ff6b33");
})


window.onload = ()=> {
    let savedColor = localStorage.getItem("backgroundColor")
    if (savedColor) {
      document.body.style.backgroundColor = savedColor
    }
  }
  