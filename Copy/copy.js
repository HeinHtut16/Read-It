let eventDropdown = document.getElementById("event-dropdown");
let productDropdown = document.getElementById("product-dropdown");
let eventList = document.getElementById("event-list");
let productList = document.getElementById("product-list");
let menu = document.getElementById("menu");
let navigationBar2 = document.getElementById("nav-2");


document.getElementById("wrap-events").addEventListener("click", () => {
    eventDropdown.classList.toggle("show");
});

document.getElementById("wrap-products").addEventListener("click", () => {
    productDropdown.classList.toggle("show");
});

document.addEventListener("click", (event) => {
    if(!event.target.matches("#wrap-events") && !event.target.matches("#wrap-events a") && !event.target.matches("#wrap-events i"))
    {
        if(eventDropdown.classList.contains("show"))
        {
            eventDropdown.classList.remove("show");
        }
    }
    if(!event.target.matches("#wrap-products") && !event.target.matches("#wrap-products a") && !event.target.matches("#wrap-products i"))
    {
        if(productDropdown.classList.contains("show"))
        {
            productDropdown.classList.remove("show");
        }
    }
});

document.querySelector(".navigation-bar-2 #click-event").addEventListener("click", () => {
    eventList.classList.toggle("show");
});

document.querySelector(".navigation-bar-2 #click-product").addEventListener("click", () => {
    productList.classList.toggle("show");
});

document.getElementById("menu").addEventListener("click", () => {
    navigationBar2.classList.toggle("show");
    if(menu.classList.contains("fa-bars")) 
    {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
    }
    else if(menu.classList.contains("fa-xmark"))
    {
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    }

    if(navigationBar2.classList.contains("show")) 
    {
        document.body.style.overflow = "hidden";
    } 
    else 
    {
        document.body.style.overflow = "auto";
    }
});
