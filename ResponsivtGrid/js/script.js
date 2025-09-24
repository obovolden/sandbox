const burgerBtn = document.getElementById("burgerBtn")
const xBtn = document.getElementById("xBtn")
const menu = document.getElementById("menu")

burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})

xBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})