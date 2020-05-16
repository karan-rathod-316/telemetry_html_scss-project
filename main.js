const parallax_DOM = document.querySelector("#parallax");

window.addEventListener("scroll", function(event) {
    let offset = window.scrollY;
    parallax_DOM.style.backgroundPositionY = `${offset * 0.9 }px`;
})