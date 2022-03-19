const dropDownNavButton = document.querySelector('.hamburger');
const topNavRight = document.querySelector('.topnav-right');
// const topNavItem = document.querySelector('.topnavItem');
// const closeTopNavRight = document.querySelector('.closeIcon');
// const topNavIcon = document.querySelector('.topnavIcon');

// function toggleTopNavRight() {
//     if (topnav-right.classList.contains("showTopNavRight")) {
//         topnav-right.classList.remove("showTopNavRight");
//         closeIcon.style.display = "none";
//         topNavIcon.style.display = "block";
//     } else {
//         topNavRight.classList.add("showTopNavRight");
//         closeTopNavRight.style.display = "block";
//         topNavIcon.style.display ="block";
//     }
// }

// hamburger.addEventListener("click", toggleTopNavRight);

dropDownNavButton.addEventListener("click", () => {
    console.log("click")
    topNavRight.classList.remove('topnav-right')
    topNavRight.classList.add('active-topnav')
})
