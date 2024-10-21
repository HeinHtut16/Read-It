let eventDropdown = document.getElementById("event-dropdown");
let productDropdown = document.getElementById("product-dropdown");
let eventList = document.getElementById("event-list");
let productList = document.getElementById("product-list");
let menu = document.getElementById("menu");
let navigationBar2 = document.getElementById("nav-2");
let contentContainer = document.getElementById("content-container");
let currentDate = new Date();

let nodeListUsers = document.querySelectorAll(".flex b");
let elementUsernames = [...nodeListUsers];
let usernames = [];
usernames = elementUsernames.map(user => ({username: user.textContent}));

let nodeListTopics = document.querySelectorAll(".flex-2 h4");
let elementTopics = [...nodeListTopics];
let topics = [];
topics = elementTopics.map(topic => ({topicName: topic.textContent}));

let nodeListContents = document.querySelectorAll(".content");
let elementContents = [...nodeListContents];
let contents = [];
contents = elementContents.map(content => ({contentName: content})); 

let usernamesTopicsContents = [];
for(let i = 0; i < usernames.length; i++)
{
    let obj = {
        username: usernames[i].username,
        topic: topics[i].topicName,
        content: contents[i].contentName
    }
    usernamesTopicsContents.push(obj);
}
let searchInput = document.querySelector(".search");
let viewMore = document.querySelector(".view-more");
let currentIndex = 4;

let fixedContainer = document.querySelector(".fixed-container");


console.log(contents);
console.log(contents[0].contentName);
console.log(usernamesTopicsContents);
console.log(usernamesTopicsContents[0].content);

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

// document.querySelector("#search").onclick = () => {
    
//     let inputValue = searchInput.value.toLowerCase();
//     console.log(inputValue !== "")
//     if(inputValue !== "")
//     {
//         usernamesTopicsContents.forEach(item => {
//             let isVisible = item.username.toLowerCase().includes(inputValue) || item.topic.toLowerCase().includes(inputValue);
//             item.content.classList.toggle("hide", !isVisible);
//         });
//         viewMore.classList.add("hide");
//     }
//     else 
//     {
//         for(let i = 0; i < nodeListContents.length; i++)
//         {
//             nodeListContents[i].classList.add("hide");
//         }
//         viewMore.classList.add("hide");
//     }
// }

function hideMessages() {
    for(let i = 4; i < nodeListContents.length; i++) 
    {
        nodeListContents[i].classList.add("hide");
    }
}
hideMessages();

document.querySelector(".search").addEventListener("input", () => {
    let inputValue = searchInput.value.toLowerCase();
    console.log(inputValue !== "")
    if(inputValue !== "")
    {
        usernamesTopicsContents.forEach(item => {
            let isVisible = item.username.toLowerCase().includes(inputValue) || item.topic.toLowerCase().includes(inputValue);
            item.content.classList.toggle("hide", !isVisible); 
            // toggle becomes a one-way operation, if (!isVisible) evaluates to true, "hide" is added to the classList, otherwise, nothing happens.
        });
        viewMore.classList.add("hide");
    }
    else 
    {
        for(let i = 0; i < nodeListContents.length; i++)
        {
            nodeListContents[i].classList.add("hide");
        }
        viewMore.classList.add("hide");
    }
});

document.querySelector(".search").onkeydown = (e) => {
    if(e.key == "Enter")
    {
        document.querySelector("#search").onclick();
    }
}

document.querySelector("#reset").addEventListener("click", () => {
    hideMessages();
    for(let i = 0; i < 4; i++)
    {
        nodeListContents[i].classList.remove("hide");
    }
    viewMore.classList.remove("hide");
    currentIndex = 4;
});

document.addEventListener("DOMContentLoaded", () => {
    searchInput.focus();
});


document.querySelector(".view-more").addEventListener("click", () => {
    let showMessageCount = currentIndex + 4;
    for(let i = currentIndex; i < showMessageCount; i++)
    {
        console.log("click")
        nodeListContents[i].classList.remove("hide");
        currentIndex++;
        if(nodeListContents[i+1] === undefined)
        {
            viewMore.classList.add("hide");
        }
    }
});

window.addEventListener("resize", () => {
    document.body.style.overflow = "auto";
    navigationBar2.classList.remove("show");
    fixedContainer.classList.remove("show");
    menu.classList.replace("fa-xmark", "fa-bars");
});