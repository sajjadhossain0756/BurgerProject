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

// tab function start
const tabs = document.querySelectorAll(".tab-menu li");
const all = document.querySelectorAll(".menu-card");
const food = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snacks");
const bevarage = document.querySelectorAll(".bevarage");
 
   tabs.forEach((tab)=>{
        tab.addEventListener("click",()=>{
            tabs.forEach((tab)=>{
                 tab.classList.remove("active");
            })

            tab.classList.add("active");

            const tabval = tab.getAttribute("data-tabs");
            
            all.forEach((item)=>{
                item.style.display = "none" ;
            })
            if(tabval == "food"){
               food.forEach((item)=>{
                   item.style.display = "block" ;})
            }
            else if(tabval == "snacks"){
               snacks.forEach((item)=>{
                   item.style.display = "block" ;})
            }
            else if(tabval == "bevarage"){
               bevarage.forEach((item)=>{
                   item.style.display = "block" ;})
            }
            else{
               all.forEach((item)=>{
                   item.style.display = "block" ;
               })
            }

        })
   })