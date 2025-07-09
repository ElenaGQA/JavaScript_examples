const slide = document.querySelectorAll(".slide")
const sliderBtnL = document.querySelector("#left")
const sliderBtnR = document.querySelector("#right")


let index = 0;

sliderBtnL.addEventListener('click', () => {
    slide[index].style.display = "none";

    index++;

    if (index >= slide.length) {
        index = 0;
    }

    slide[index].style.display = "block";
})

sliderBtnR.addEventListener('click', () => {
    slide[index].style.display = "none";

    index--;

    if (index < 0) {
        index = slide.length - 1;
    }

    slide[index].style.display = "block";
})