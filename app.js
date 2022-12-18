const hamburger = document.getElementById("hamburger-menu")
const close = document.getElementById("close-menu")
const menu = document.getElementById("menu")

function showMenu(){
    hamburger.style.display = "none"
    close.style.display = "block"
    menu.style.display = "block"
}

function closeMenu(){
    close.style.display = "none"
    hamburger.style.display = "block"
    menu.style.display = "none"
}

hamburger.addEventListener("click", showMenu)
close.addEventListener("click", closeMenu)

