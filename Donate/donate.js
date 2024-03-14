let eventDropdown = document.getElementById("event-dropdown");
let productDropdown = document.getElementById("product-dropdown");
let eventList = document.getElementById("event-list");
let productList = document.getElementById("product-list");
let menu = document.getElementById("menu");
let navigationBar2 = document.getElementById("nav-2");
let donationNotice = document.getElementById("donation-notice");
let closeBtn = document.querySelector(".close");
let donationWrapper = document.querySelector(".donation-wrapper");
let donationBtn = document.querySelector(".donation-button");


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
});

document.getElementById("donation-button").addEventListener("click", (event) => {
    let donationAmount = document.getElementById("donation-amount").value;
    if(donationAmount < 1)
    {
        event.preventDefault();
    }
});

// document.querySelector(".close").addEventListener("click", () => {
//     donationWrapper.classList.remove("show");
// });

document.addEventListener("click", (event) => {
    if(event.target.matches(".donation-wrapper") || (event.target.matches(".close")))
    {
        donationWrapper.classList.remove("show");
    }
});

document.querySelector(".donate-now").addEventListener("click", () => {
    donationWrapper.classList.add("show");
});

document.querySelector(".donation-amount").addEventListener("input", () => {
    let donationAmount = document.getElementById("donation-amount").value;
    if(donationAmount < 1)
    {
        donationNotice.classList.add("show");
        donationBtn.classList.add("fade");
        donationBtn.classList.remove("donation-button-hover");
    }
    else 
    {
        if(donationNotice.classList.contains("show"))
        {
            donationNotice.classList.remove("show")
            donationBtn.classList.remove("fade");
            donationBtn.classList.add("donation-button-hover");
        };
    }
});