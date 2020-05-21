var check = 0;

const parallax_DOM = document.querySelector("#parallax");

window.addEventListener("scroll", function(event) {
    let offset = window.scrollY;
    parallax_DOM.style.backgroundPositionY = `${offset * 0.8 }px`;

    if (offset > 500) {
        document.querySelector('.header').style.position = "fixed";
        document.querySelector('.header').style.backgroundColor = "#F28F85";
    } else if (offset < 500) {
        document.querySelector('.header').style.position = "fixed";
        document.querySelector('.header').style.backgroundColor = "transparent";
    }
})

var burger = document.querySelector('fas.fa-bars')

// function showNav(event) {
//     if (check == 0) {
//         document.querySelector('.nav-menu').style.display = 'flex';
//         check = 1;
//     } else if (check == 1) {
//         document.querySelector('.nav-menu').style.display = 'none';
//         check = 0;

//     }
// }

var navMenu = document.querySelector(".nav-menu")
    // navMenu.classList.add("disp-none")


// var hamButton = document.getElementById("hamburger-toggle");
// hamButton.addEventListener('click', () => {
//     // navMenu.classList.toggle('flex')
//     if (navMenu.style.display === "flex") {
//         navMenu.style.display = "none"
//     } else {
//         navMenu.style.display = "flex";
//     }

// })

// window.addEventListener("resize", function(e) {
//     if (window.innerWidth > 1000) {
//         navMenu.style.display = "flex";
//         navMenu.style.flexDirection = "row";
//     } else {
//         navMenu.style.flexDirection = "column";
//     }
// })




// burger.addEventListener('click', showNav)

// Tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})