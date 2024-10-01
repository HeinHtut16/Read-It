let eventDropdown = document.getElementById("event-dropdown");
let productDropdown = document.getElementById("product-dropdown");
let eventList = document.getElementById("event-list");
let productList = document.getElementById("product-list");
let menu = document.getElementById("menu");
let navigationBar2 = document.getElementById("nav-2");
let minusButtons = document.querySelectorAll(".minus-btn");
let plusButtons = document.querySelectorAll(".plus-btn");
let amount = document.querySelectorAll(".amount");
let smallImages = document.querySelectorAll(".small-image");
let bigImage = document.getElementById("big-image");
let srcGiftCard = "Gift Card ";
let denominations = document.querySelectorAll(".denomination");
let price = document.getElementById("price");
let image = 1;
let dots = document.querySelectorAll(".dot");
let fixedContainer = document.querySelector(".fixed-container");

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
    fixedContainer.classList.toggle("show");
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

    if(navigationBar2.classList.contains("show")) 
    {
        document.body.style.overflow = "hidden";
    } 
    else 
    {
        document.body.style.overflow = "auto";
    }
});
for(let i = 0; i < minusButtons.length; i++) 
{
    minusButtons[i].addEventListener("click", () => {
        amount[i].textContent--;
        if(amount[i].textContent == 1) 
        {
            minusButtons[i].classList.add("low-opacity");
            minusButtons[i].setAttribute("disabled", "disabled");
        }
    });
    plusButtons[i].addEventListener("click", () => {
        amount[i].textContent++;
        if(amount[i].textContent > 1) 
        {
            minusButtons[i].classList.remove("low-opacity");
            minusButtons[i].removeAttribute("disabled");
        }
    });
}


document.addEventListener("click", (event) => {
    for(let i = 0; i < smallImages.length; i++)
    {
        if(event.target.matches(".small-image" + (i+1)))
        {
            bigImage.setAttribute("src", "../Img/"+srcGiftCard+(i+1)+".jpg");
            console.log(bigImage);
        }
    }
});


document.addEventListener("click", (event) => {
    for(let i = 0; i < denominations.length; i++)
    {
        if(event.target.matches(".denomination" + (i+1)))
        {
            for(let i = 0; i < denominations.length; i++)
            {
                if(denominations[i].classList.contains("active"))
                {
                    denominations[i].classList.remove("active");
                }
            }
            denominations[i].classList.add("active");
            price.textContent = denominations[i].textContent;
        }
    }
});

document.getElementById("prev").addEventListener("click", () => {
    if(image < 2) image = 7;
    bigImage.setAttribute("src", "../Img/"+srcGiftCard+(image-1)+".jpg");
    image--;
    for(let i = 0; i < dots.length; i++)
    {
        if(dots[i].classList.contains("active"))
        {
            dots[i].classList.remove("active");
        }
    }
    dots[image-1].classList.add("active");
});

document.getElementById("next").addEventListener("click", () => {
    if(image > 5) image = 0;
    bigImage.setAttribute("src", "../Img/"+srcGiftCard+(image+1)+".jpg");
    image++;
    for(let i = 0; i < dots.length; i++)
    {
        if(dots[i].classList.contains("active"))
        {
            dots[i].classList.remove("active");
        }
    }
    dots[image-1].classList.add("active");
});

// for(let i = 0; i < dots.length; i++) 
// {
//     dots[i].addEventListener("click", () => {
//         for(let i = 0; i < dots.length; i++)
//         {
//             if(dots[i].classList.contains("active"))
//             {
//                 dots[i].classList.remove("active");
//             }
//         }
//         dots[i].classList.add("active");
//         bigImage.setAttribute("src", "../Img/"+srcGiftCard+(i+1)+".jpg");
//     });
// }



document.addEventListener("click", (event) => {
    for(let i = 0; i < dots.length; i++)
    {
        if(event.target.matches(".dot" + (i+1)))
        {
            for(let i = 0; i < dots.length; i++)
            {
                if(dots[i].classList.contains("active"))
                {
                    dots[i].classList.remove("active");
                }
            }
            dots[i].classList.add("active");
            bigImage.setAttribute("src", "../Img/"+srcGiftCard+(i+1)+".jpg");
        }
    }
});

window.addEventListener("resize", () => {
    document.body.style.overflow = "auto";
    navigationBar2.classList.remove("show");
    fixedContainer.classList.remove("show");
    menu.classList.replace("fa-xmark", "fa-bars");
});