// TOGGLER ANIMATION
const menuBtn = document.querySelector('.menu-btn');
const menuVisibility = document.querySelector('.menu-page');
const menuAnimation = document.querySelector('.menu-animation');
const textAnimation = document.querySelector('.text-animation');
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        menuVisibility.classList.add("visible");
        menuAnimation.classList.add("backgroundAnimation");
        textAnimation.classList.add("textAnimation");
        menuOpen = true;
    } else{
        menuBtn.classList.remove("open");
        menuVisibility.classList.remove("visible");
        menuAnimation.classList.remove("backgroundAnimation");
        textAnimation.classList.remove("textAnimation");
        menuOpen = false;
    }

});


// const seeScheduleOne = document.getElementById("hidden-btn-loc-1");
// const seeScheduleTwo = document.getElementById("hidden-btn-loc-2");
// let screenSize = 960;
// let scheduleOneVisible = false;
// let scheduleTwoVisible = false;

// seeScheduleOne.addEventListener("click", seeScheduleActionOne);
// seeScheduleTwo.addEventListener("click", seeScheduleActionTwo);

// function seeScheduleActionOne() {
//     if(!scheduleOneVisible && window.innerWidth<=screenSize) {
//         document.getElementById("program-2").style.visibility = "hidden";
//         document.getElementById("program-1").style.visibility = "visible";
//         scheduleOneVisible = true;
//         scheduleTwoVisible = false;
//     } else {
//         document.getElementById("program-1").style.visibility = "hidden";
//         scheduleOneVisible = false;
//     }
// }

// function seeScheduleActionTwo() {
//     if(!scheduleTwoVisible && window.innerWidth<=screenSize){
//         document.getElementById("program-1").style.visibility = "hidden";
//         document.getElementById("program-2").style.visibility = "visible";
//         scheduleTwoVisible = true;
//         scheduleOneVisible = false;
//     } else{
//         document.getElementById("program-2").style.visibility = "hidden";
//         scheduleTwoVisible = false;
//     }
// }

// function setVisibilityAfterResize() {
//     if(window.innerWidth>screenSize){
//         document.getElementById("program-1").style.visibility = "visible";
//         document.getElementById("program-2").style.visibility = "visible";
//     }else{
//         document.getElementById("program-1").style.visibility = "hidden";
//         document.getElementById("program-2").style.visibility = "hidden";

//     }
// }

// window.onresize = setVisibilityAfterResize;
// setVisibilityAfterResize();


// const myCarouselElement = document.querySelector('#myCarousel')
// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   wrap: false
// })