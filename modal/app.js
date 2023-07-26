const btn = document.querySelector(".btn");

const closeBtn = document.querySelector(".close-btn");

const modelOverlay = document.querySelector(".modal-overlay");

btn.addEventListener("click",()=>{
    modelOverlay.classList.add("open-modal");
})

closeBtn.addEventListener("click",()=>{
    modelOverlay.classList.remove("open-modal");
})