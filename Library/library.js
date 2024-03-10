let eventDropdown = document.getElementById("event-dropdown");
let productDropdown = document.getElementById("product-dropdown");
let eventList = document.getElementById("event-list");
let productList = document.getElementById("product-list");
let menu = document.getElementById("menu");
let navigationBar2 = document.getElementById("nav-2");
let category = document.getElementById("category");
let categoryDropdownContent = document.getElementById("category-dropdown-content");


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
    if(!event.target.matches("#category") && !event.target.matches("#category > p") && !event.target.matches("#category p i"))
    {
        if(categoryDropdownContent.classList.contains("show"))
        {
            categoryDropdownContent.classList.remove("show");
        }
        if(category.classList.contains("category-modify"))
        {
            category.classList.remove("category-modify");
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
});

document.getElementById("category").addEventListener("click", () => {
    categoryDropdownContent.classList.toggle("show");
    category.classList.toggle("category-modify");
});