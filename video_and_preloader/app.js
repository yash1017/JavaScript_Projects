const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container")

const preLoader = document.querySelector(".preloader");
switchBtn.addEventListener("click",()=>{
    if(!switchBtn.classList.contains("slide"))
    {
        switchBtn.classList.add("slide");
        video.pause();
    }
    else{
        switchBtn.classList.remove("slide");
        video.play();
    }
})

window.addEventListener("DOMContentLoaded",()=>{
   preLoader.classList.add("hide-preloader")
})