/*Header Background Add/remove Event*/
const header = document.querySelector(".header");
window.addEventListener("scroll", ()=>{
    let scrollCounter = this.scrollY;
    if(scrollCounter > 50){
        header.classList.add('header-bg');
    }else{
        header.classList.remove('header-bg');
    }
})

/*Video Overlay Functions*/
const videoOverlay = document.querySelector(".video-overlay");
const closeOverlay = document.querySelector(".close-overlay");
const btnPlay = document.querySelector(".btn-play");
const btnClose = document.querySelector(".btn-close");
const video = document.querySelector("video");
btnPlay.addEventListener("click", ()=>{
    videoOverlay.classList.add("show");
    video.play();
})
btnClose.addEventListener("click", ()=>{
    videoOverlay.classList.remove("show")
})
closeOverlay.addEventListener("click", ()=>{
    videoOverlay.classList.remove("show")
})

/*Color Change Functions*/
const themeColor = document.documentElement;
const colorPlate = document.querySelector(".color-plate");
const themeOption = document.querySelectorAll(".theme-option");
const colorToggler = document.querySelector(".toggler");
const themeOne = document.querySelector(".theme-one");
const themeTwo = document.querySelector(".theme-two");
const themeThree = document.querySelector(".theme-three");
const themefour = document.querySelector(".theme-four");
colorToggler.addEventListener("click", function () {
    colorPlate.classList.toggle("show")
});
themeOne.addEventListener("click", function () {
    themeColor.style.cssText = "--theme-clr: #19a865";
    themeOption.forEach(themeOption =>{
        themeOption.classList.remove("active");
    })
    this.classList.add("active")
});
themeTwo.addEventListener("click", function () {
    themeColor.style.cssText = "--theme-clr: #2b88ff";
    themeOption.forEach(themeOption =>{
        themeOption.classList.remove("active");
    })
    this.classList.add("active")
});
themeThree.addEventListener("click", function () {
    themeColor.style.cssText = "--theme-clr: #ff2b35";
    themeOption.forEach(themeOption =>{
        themeOption.classList.remove("active");
    })
    this.classList.add("active")
});
themefour.addEventListener("click", function () {
    themeColor.style.cssText = "--theme-clr: #ff662b";
    themeOption.forEach(themeOption =>{
        themeOption.classList.remove("active");
    })
    this.classList.add("active")
});