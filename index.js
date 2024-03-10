let eventDropdown = document.getElementById("event-dropdown");
let productDropdown = document.getElementById("product-dropdown");
let eventList = document.getElementById("event-list");
let productList = document.getElementById("product-list");
let menu = document.getElementById("menu");
let navigationBar2 = document.getElementById("nav-2");
let mediumMediaWidth = window.matchMedia("(max-width: 1200px)")
let navItemsText = document.querySelectorAll(".nav-item-text");
let navItemsIcon = document.querySelectorAll(".wrap-1 i");


document.getElementById("click-event").addEventListener("click", () => {
    eventDropdown.classList.toggle("show");
});

document.getElementById("click-product").addEventListener("click", () => {
    productDropdown.classList.toggle("show");
});


document.addEventListener("click", (event) => {
    if(!event.target.matches("#click-event"))
    {
        if(eventDropdown.classList.contains("show"))
        {
            eventDropdown.classList.remove("show");
        }
    }
    if(!event.target.matches("#click-product"))
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
        // menu.classList.remove("fa-bars");
        // menu.classList.add("fa-xmark");
        menu.classList.replace("fa-bars", "fa-xmark");
    }
    else if(menu.classList.contains("fa-xmark"))
    {
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    }
});


mediumMediaWidth.addEventListener("change", () => {
    navItemsText.forEach((item) => {
        item.textContent = "";
    });

    navItemsIcon.forEach((item) => {
        item.style.display = "inline";
    })
});