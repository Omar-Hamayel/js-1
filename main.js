function increase() {
    document.querySelector("div").classList.add("increase-font-size");
    document.querySelector("div").classList.remove("decrease-font-size");
}
function decrease() {
    document.querySelector("div").classList.add("decrease-font-size");
    document.querySelector("div").classList.remove("increase-font-size");
}
document.querySelector(".positive").onclick = increase;
document.querySelector(".minus").onclick = decrease;