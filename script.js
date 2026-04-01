// ===== MENU TOGGLE (MOBILE) =====
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", function() {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("open");
});

// Cerrar menú al hacer click en un enlace
nav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        menuToggle.classList.remove("active");
        nav.classList.remove("open");
    });
});

// Cerrar menú al hacer click fuera
document.addEventListener("click", function(e) {
    if (!e.target.closest(".navbar")) {
        menuToggle.classList.remove("active");
        nav.classList.remove("open");
    }
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", function() {
    const header = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ===== REVEAL ON SCROLL =====
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();
