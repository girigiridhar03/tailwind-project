const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const menuContainer = document.querySelector(".menu-container");

menu.addEventListener("click",()=>{
    
    if(menu.classList.contains("fa-bars")){
        menuContainer.style.transform = `translateY(${0})`;
        menuContainer.style.transition = "all ease .5s"
        menu.classList.add("fa-xmark");
        menu.classList.remove("fa-bars")
    }
    else{
        menuContainer.style.transform = `translateY(${-100+"%"})`;
        menuContainer.style.transition = "all ease .5s";
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-xmark")
    }
    
})
