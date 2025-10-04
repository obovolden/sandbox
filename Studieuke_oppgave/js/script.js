const burgerBtn = document.getElementById("BtnBars")
const xBtn = document.getElementById("BtnXmark")
const menu = document.getElementById("menu")

burgerBtn.classList = false

burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    xBtn.classList.toggle("hidden")
    burgerBtn.classList.toggle("visible")

})

xBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    xBtn.classList.toggle("hidden")
    burgerBtn.classList.toggle("visible")
})