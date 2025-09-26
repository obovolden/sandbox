const burgerBtn = document.getElementById("BtnBars")
const xBtn = document.getElementById("BtnXmark")
const menu = document.getElementById("menu")

burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})

xBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})