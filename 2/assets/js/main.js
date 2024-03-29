/* SLIDER */
const slider = document.getElementById("slider"),
    slides = document.getElementsByClassName("slide"),
    sliderNavigation = slider.getElementsByClassName("navigation")[0];

let activeSlide = 1;

if(slides.length > 1) {
    Array.from(sliderNavigation.getElementsByTagName("li")).forEach((navigation, index) => {
        if(index == 0)
            navigation.addEventListener("click", () => {
                slide(true);
            })
        else
            navigation.addEventListener("click", () => {
                slide(false);
            })
    });
} else {
    sliderNavigation.style.display = "none"
}

function slide(back) {
    let nextSlide;

    if(!back && activeSlide >= slides.length)
        nextSlide = 1;
    else if(back && activeSlide == 1)
        nextSlide = slides.length;
    else if(back)
        nextSlide = activeSlide - 1;
    else
        nextSlide = activeSlide + 1;

    const activeSlideElement = Array.from(slides).filter((slide) => parseInt(slide.dataset.id) == activeSlide)[0],
        nextSlideElement = Array.from(slides).filter((slide) => parseInt(slide.dataset.id) == nextSlide)[0];

    if(activeSlideElement == null || nextSlideElement == null)
        return;

    activeSlide = nextSlide;
    activeSlideElement.style.opacity = 1;

    const intervalAnimation = setInterval(() => {
        if(parseInt(activeSlideElement.style.opacity) >= 0)
            activeSlideElement.style.opacity -= 0.1;
        else {
            if(activeSlideElement.style.display != "none") {
                activeSlideElement.style.opacity = 0;
                activeSlideElement.style.display = "none";
            }

            if(nextSlideElement.style.display != "flex") {
                nextSlideElement.style.display = "flex";
                nextSlideElement.style.opacity = 0;
            }

            nextSlideElement.style.opacity += 1;

            console.log(parseInt(nextSlideElement.style.opacity))

            if(parseInt(nextSlideElement.style.opacity) >= 1) {
                nextSlideElement.style.opacity = 1;
                clearInterval(intervalAnimation);
            }
        }
    }, 1000/60);
}

/* END SLIDER */

