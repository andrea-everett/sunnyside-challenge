// const dropDownNavButton = document.querySelector('.hamburger');
// const topNavRight = document.querySelector('.topnav-right');

// dropDownNavButton.addEventListener("click", () => {
//   console.log("click")
//   topNavRight.classList.remove('topnav-right')
//   topNavRight.classList.add('active-topnav')
// })
const hamburger = document.querySelector(".hamburger");
const topNavRight = document.querySelector(".topnav-right");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("topnav-right");
  topNavRight.classList.toggle("active-topnav");
})


// const dropDownNavButton = document.querySelector('.hamburger');
// const topNavRight = document.querySelector('.topnav-right');

// function toggleMenu() {
//   if (topnav - right.classList.contains("topnav-right")) {
//     menu.classList.remove("topnav-right");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("active-topnav");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// dropDownNavButton.addEventListener("click", toggleMenu);