//=====MENU QUE CAMBIA AL HACER SCROLL =====
window.addEventListener("scroll", function(){
    constheader = document.querySelector("header");
    if(windows.scrollY > 50){
        Headers.classList.add("scrolled");
    }
});

// ===== ANIMACION REVEAL AL HACER SCROLL =====

function reveal(){
    const reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i<reveals.length; i++){
        const windowHeight = window.innerHeight;
        const elementTop =
        reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if(elementTop<windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);


// ===== EJECUTAR REVEAL AL CARGAR LA PAGINA =====

reveal();