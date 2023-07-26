const navToggle= document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links")
const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

navToggle.addEventListener(`click`,()=>{

    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(linksContainerHeight === 0) linksContainer.style.height=`${linksHeight}px`;
    else linksContainer.style.height=0;
})  