let eventDropdown = document.getElementById("event-dropdown");
let productDropdown = document.getElementById("product-dropdown");
let eventList = document.getElementById("event-list");
let productList = document.getElementById("product-list");
let menu = document.getElementById("menu");
let navigationBar2 = document.getElementById("nav-2");
let contentContainer = document.getElementById("content-container");
let currentDate = new Date();
let nodeListUsers = document.querySelectorAll(".flex b");
let elementArrays = [...nodeListUsers];
let usernames = [];
usernames = elementArrays.map(user => ({name: user.textContent}));
let searchInput = document.querySelector(".search");
let content = document.querySelectorAll(".content");
let viewMore = document.querySelector(".view-more");

// let monthNames = [
//   "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];

// let month = monthNames[currentDate.getMonth()];
// let day = currentDate.getDate();
// let year = currentDate.getFullYear();
// let hours = currentDate.getHours();
// let minutes = currentDate.getMinutes();

// let amPm = hours >= 12 ? "PM" : "AM";

// hours = hours % 12;
// hours = hours ? hours : 12;

// let formattedTime = month + " " + day + ", " + year + " " + hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + amPm;

// console.log("Current Time: " + formattedTime);

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



// document.getElementById("post").addEventListener("click", (event) => {
//     event.preventDefault();
//     let division = document.createElement("div");
//     let flex1 = document.createElement("div");
//     let defaultPhoto = document.createElement("img");
//     let div1 = document.createElement("div");
//     let p1 = document.createElement("p");
//     let p2 = document.createElement("p");
//     let flex2 = document.createElement("div");
//     let bookImage = document.createElement("img");
//     let div2 = document.createElement("div");
//     let h4 = document.createElement("h4");
//     let paragraph = document.createElement("p");
//     let noReplies = document.createElement("p");
//     let topic = document.getElementById("topic").value;
//     let clubMessage = document.getElementById("club-message").value;
//     division.classList.add("content");
//     flex1.classList.add("flex");
//     defaultPhoto.setAttribute("src", "../Img/Default_pfp.svg.png");
//     defaultPhoto.classList.add("default-user")
//     p1.textContent = "User";
//     p2.textContent = formattedTime;
//     div1.append(p1, p2);
//     flex1.append(defaultPhoto, div1);
//     h4.textContent = topic;
//     paragraph.textContent = clubMessage;
//     div2.append(h4, paragraph);
//     flex2.classList.add("flex-2");
//     bookImage.setAttribute("src", "../Book Collection/Adventure10.jpeg");
//     flex2.append(bookImage, div2);
//     noReplies.textContent = "No replies yet";
//     noReplies.classList.add("no-replies");
//     division.append(flex1, flex2, noReplies);
//     document.getElementById("content-container").append(division);
// });


document.querySelector("#search").onclick = () => {
    
    let inputValue = searchInput.value.toLowerCase();
    console.log(inputValue !== "")
    if(inputValue !== "")
    {
        usernames.forEach((user, index) => {
            console.log(user.name)
            let isVisible = user.name.toLowerCase().includes(inputValue);
            console.log(user.name.toLowerCase().includes(inputValue))
            content[index].classList.toggle("hide", !isVisible);
        });
        viewMore.classList.add("hide");
    }
}

document.querySelector(".search").onkeydown = (e) => {
    if(e.key === "Enter")
    {
        document.querySelector("#search").onclick();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    searchInput.focus();
});

for(let i = 4; i < content.length; i++) 
{
    content[i].classList.add("hide");
}
let currentIndex = 4;

document.querySelector(".view-more").addEventListener("click", () => {
    let showMessageCount = currentIndex + 4;
    for(let i = currentIndex; i < showMessageCount; i++)
    {
        console.log("click")
        content[i].classList.remove("hide");
        currentIndex++;
        if(content[i+1] === undefined)
        {
            viewMore.classList.add("hide");
        }
    }
  
});