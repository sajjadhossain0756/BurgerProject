const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeIcon = document.getElementById("closeIcon");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link)=>{
    link.addEventListener("click",()=>{
        navMenu.classList.add("hide")
    })
})

hamburger.addEventListener("click",()=>{
   navMenu.classList.remove("hide")
})
closeIcon.addEventListener("click",()=>{
    navMenu.classList.add("hide");
})