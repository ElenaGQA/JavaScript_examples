const slide = document.querySelectorAll(".slide")
const sliderBtnL = document.querySelector("#left")
const sliderBtnR = document.querySelector("#right")
const dots = document.querySelectorAll(".dot")


let index = 0;

sliderBtnL.addEventListener('click', () => {
    slide[index].style.display = "none";

    index++;

    if (index >= slide.length) {
        index = 0;
    }

    slide[index].style.display = "block";
    slide[index].style.animation = "fade 1s"
})

sliderBtnR.addEventListener('click', () => {
    slide[index].style.display = "none";

    index--;

    if (index < 0) {
        index = slide.length - 1;
    }

    slide[index].style.display = "block"
    slide[index].style.animation = "fade 1s"
})

dots.forEach((el) => {

    el.addEventListener('click', () => {
        dots.forEach((element) => {
            element.classList.remove("active")
        })
        slide[index].style.display = "none";
        index = +el.dataset.index
        slide[index].style.display = "block"
        slide[index].style.animation = "fade 1s"
        el.classList.add("active")
    })
})