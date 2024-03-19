let eventDropdown = document.getElementById("event-dropdown");
let productDropdown = document.getElementById("product-dropdown");
let eventList = document.getElementById("event-list");
let productList = document.getElementById("product-list");
let menu = document.getElementById("menu");
let navigationBar2 = document.getElementById("nav-2");
let minusButtons = document.querySelectorAll(".minus-btn");
let plusButtons = document.querySelectorAll(".plus-btn");
let amount = document.querySelectorAll(".amount");
let totalAmount = document.getElementById("total-amount");
let bookPlusButtons = document.querySelectorAll(".book-container .plus-btn");
let bookMinusButtons = document.querySelectorAll(".book-container .minus-btn");
let currentAmount = 0;
let oneForumDiscussion = document.getElementById("one-forum-discussion");
let twoForumDiscussion = document.getElementById("two-forum-discussion");
let allForumDiscussion = document.getElementById("all-forum-discussion");
let oneForumDiscussionIsChecked = false;
let twoForumDiscussionIsChecked = false;
let allForumDiscussionIsChecked = false;


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

for(let i = 0; i < minusButtons.length; i++) 
{
    minusButtons[i].addEventListener("click", () => {
        amount[i].textContent--;
        if(amount[i].textContent == 0) 
        {
            minusButtons[i].classList.add("low-opacity");
            minusButtons[i].setAttribute("disabled", "disabled");
        }
    });
    plusButtons[i].addEventListener("click", () => {
        amount[i].textContent++;
        if(amount[i].textContent > 0) 
        {
            minusButtons[i].classList.remove("low-opacity");
            minusButtons[i].removeAttribute("disabled");
        }
    });
}

for(let i = 0; i < bookMinusButtons.length; i++)
{
    bookMinusButtons[i].addEventListener("click", () => {
        totalAmount.textContent = (parseFloat(totalAmount.textContent) - 29.99).toFixed(2);
    });
    bookPlusButtons[i].addEventListener("click", () => {
        totalAmount.textContent = (parseFloat(totalAmount.textContent) + 29.99).toFixed(2);
    })
}

document.querySelector(".t-shirt .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 6.99).toFixed(2);
});

document.querySelector(".t-shirt .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 6.99).toFixed(2);
});

document.querySelector(".hat .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 12.99).toFixed(2);
});

document.querySelector(".hat .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 12.99).toFixed(2);
});

document.querySelector(".drinking-mug .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 5.99).toFixed(2);
});

document.querySelector(".drinking-mug .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 5.99).toFixed(2);
});

document.querySelector(".bookmark .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 9.99).toFixed(2);
});

document.querySelector(".bookmark .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 9.99).toFixed(2);
});

document.querySelector(".all-over-shirt .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 24.99).toFixed(2);
});

document.querySelector(".all-over-shirt .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 24.99).toFixed(2);
});

document.querySelector(".crayons .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 19.99).toFixed(2);
});

document.querySelector(".crayons .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 19.99).toFixed(2);
});

document.querySelector(".jacket .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 39.99).toFixed(2);
});

document.querySelector(".jacket .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 39.99).toFixed(2);
});

document.querySelector(".rucksack .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 29.99).toFixed(2);
});

document.querySelector(".rucksack .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 29.99).toFixed(2);
});

document.querySelector(".bag .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 14.99).toFixed(2);
});

document.querySelector(".bag .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 14.99).toFixed(2);
});

document.querySelector(".snackbox1 .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 29.99).toFixed(2);
});

document.querySelector(".snackbox1 .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 29.99).toFixed(2);
});

document.querySelector(".snackbox2 .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 12.99).toFixed(2);
});

document.querySelector(".snackbox2 .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 12.99).toFixed(2);
});

document.querySelector(".snackbox3 .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 15.99).toFixed(2);
});

document.querySelector(".snackbox3 .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 15.99).toFixed(2);
});

document.querySelector(".snackbox4 .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 19.99).toFixed(2);
});

document.querySelector(".snackbox4 .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 19.99).toFixed(2);
});

document.querySelector(".snackbox5 .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 24.99).toFixed(2);
});

document.querySelector(".snackbox5 .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 24.99).toFixed(2);
});

document.querySelector(".snackbox6 .minus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) - 19.99).toFixed(2);
});

document.querySelector(".snackbox6 .plus-btn").addEventListener("click", () => {
    totalAmount.textContent = (parseFloat(totalAmount.textContent) + 19.99).toFixed(2);
});


let clickOneForumDiscussion = () => {
    twoForumDiscussionIsChecked = false;
    allForumDiscussionIsChecked = false;
    if(!oneForumDiscussionIsChecked)
    {
        totalAmount.textContent = (parseFloat(totalAmount.textContent) + 9.99).toFixed(2);
        totalAmount.textContent = (parseFloat(totalAmount.textContent) - currentAmount).toFixed(2);
        currentAmount = 9.99;
        oneForumDiscussion.checked = true;
        oneForumDiscussionIsChecked = true;
    }
    else 
    {
        totalAmount.textContent = (parseFloat(totalAmount.textContent) - currentAmount).toFixed(2);
        currentAmount = 0;
        oneForumDiscussion.checked = false;
        oneForumDiscussionIsChecked = false;
    }
}

let clickTwoForumDiscussion = () => {
    oneForumDiscussionIsChecked = false;
    allForumDiscussionIsChecked = false;
    if(!twoForumDiscussionIsChecked) 
    {
        totalAmount.textContent = (parseFloat(totalAmount.textContent) + 19.99).toFixed(2);
        totalAmount.textContent = (parseFloat(totalAmount.textContent) - currentAmount).toFixed(2);
        currentAmount = 19.99;
        twoForumDiscussion.checked = true;
        twoForumDiscussionIsChecked = true;
    }
    else 
    {
        totalAmount.textContent = (parseFloat(totalAmount.textContent) - currentAmount).toFixed(2);
        currentAmount = 0;
        twoForumDiscussion.checked = false;
        twoForumDiscussionIsChecked = false;
    }
}

let clickAllForumDiscussion = () => {
    oneForumDiscussionIsChecked = false;
    twoForumDiscussionIsChecked = false;
    if(!allForumDiscussionIsChecked)
    {
        totalAmount.textContent = (parseFloat(totalAmount.textContent) + 29.99).toFixed(2);
        totalAmount.textContent = (parseFloat(totalAmount.textContent) - currentAmount).toFixed(2);
        currentAmount = 29.99;
        allForumDiscussion.checked = true;
        allForumDiscussionIsChecked = true;
    }
    else 
    {
        totalAmount.textContent = (parseFloat(totalAmount.textContent) - currentAmount).toFixed(2);
        currentAmount = 0;
        allForumDiscussion.checked = false;
        allForumDiscussionIsChecked = false;
    }
}

oneForumDiscussion.addEventListener("click", clickOneForumDiscussion);
twoForumDiscussion.addEventListener("click", clickTwoForumDiscussion);
allForumDiscussion.addEventListener("click", clickAllForumDiscussion);

document.querySelector(".join-now").addEventListener("click", (event) => {
    if(parseInt(totalAmount.textContent) === 0)
    {
        alert("Please add something to buy first!");
        event.preventDefault();
    }
});


// document.addEventListener("click", (event) => {
//     if(event.target.matches("#one-forum-discussion"))
//     {
//         // document.querySelector("#one-forum-discussion").removeEventListener("click", clickOneForumDiscussion); 
//         // document.querySelector("#two-forum-discussion").addEventListener("click", clickTwoForumDiscussion);
//         // document.querySelector("#all-forum-discussion").addEventListener("click", clickAllForumDiscussion);
//         totalAmount.textContent = (parseFloat(totalAmount.textContent) - currentAmount).toFixed(2);
//         currentAmount = 9.99;
//     }
//     if(event.target.matches("#two-forum-discussion"))
//     {  
//         // document.querySelector("#two-forum-discussion").removeEventListener("click", clickTwoForumDiscussion);
//         // document.querySelector("#one-forum-discussion").addEventListener("click", clickOneForumDiscussion);
//         // document.querySelector("#all-forum-discussion").addEventListener("click", clickAllForumDiscussion);
//         totalAmount.textContent = (parseFloat(totalAmount.textContent) - currentAmount).toFixed(2);
//         currentAmount = 19.99;
//     }
//     else if(event.target.matches("#all-forum-discussion"))
//     {  
//         // document.querySelector("#all-forum-discussion").removeEventListener("click", clickAllForumDiscussion);
//         // document.querySelector("#one-forum-discussion").addEventListener("click", clickOneForumDiscussion);
//         // document.querySelector("#two-forum-discussion").addEventListener("click", clickTwoForumDiscussion);
//         totalAmount.textContent = (parseFloat(totalAmount.textContent) - currentAmount).toFixed(2);
//         currentAmount = 29.99;
//     }
// });