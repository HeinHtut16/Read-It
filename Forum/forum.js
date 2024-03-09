let eventDropdown = document.getElementById("event-dropdown");
let productDropdown = document.getElementById("product-dropdown");
let eventList = document.getElementById("event-list");
let productList = document.getElementById("product-list");
let menu = document.getElementById("menu");
let navigationBar2 = document.getElementById("nav-2");
let contentContainer = document.getElementById("content-container");
let currentDate = new Date();


let monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

let month = monthNames[currentDate.getMonth()];
let day = currentDate.getDate();
let year = currentDate.getFullYear();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

let amPm = hours >= 12 ? "PM" : "AM";

hours = hours % 12;
hours = hours ? hours : 12;

let formattedTime = month + " " + day + ", " + year + " " + hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + amPm;

// Output the current time
console.log("Current Time: " + formattedTime);

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
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
    }
    else if(menu.classList.contains("fa-xmark"))
    {
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    }
});



document.getElementById("post").addEventListener("click", (event) => {
    event.preventDefault();
    let division = document.createElement("div");
    let flex1 = document.createElement("div");
    let defaultPhoto = document.createElement("img");
    let div1 = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let flex2 = document.createElement("div");
    let bookImage = document.createElement("img");
    let div2 = document.createElement("div");
    let h4 = document.createElement("h4");
    let paragraph = document.createElement("p");
    let noReplies = document.createElement("p");
    let topic = document.getElementById("topic").value;
    let clubMessage = document.getElementById("club-message").value;
    division.classList.add("content");
    flex1.classList.add("flex");
    defaultPhoto.setAttribute("src", "../Img/Default_pfp.svg.png");
    defaultPhoto.classList.add("default-user")
    p1.textContent = "User";
    p2.textContent = formattedTime;
    div1.append(p1, p2);
    flex1.append(defaultPhoto, div1);
    h4.textContent = topic;
    paragraph.textContent = clubMessage;
    div2.append(h4, paragraph);
    flex2.classList.add("flex-2");
    bookImage.setAttribute("src", "../Book Collection/Adventure10.jpeg");
    flex2.append(bookImage, div2);
    noReplies.textContent = "No replies yet";
    noReplies.classList.add("no-replies");
    division.append(flex1, flex2, noReplies);
    document.getElementById("content-container").append(division);
});

