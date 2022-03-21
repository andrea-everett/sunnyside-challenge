const dropDownNavButton = document.querySelector('.hamburger');
const topNavRight = document.querySelector('.topnav-right');

dropDownNavButton.addEventListener("click", () => {
    console.log("click")
    topNavRight.classList.remove('topnav-right')
    topNavRight.classList.add('active-topnav')
})
