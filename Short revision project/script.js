let slider = document.querySelector(".slider"); // Accessing the first slider element
let i = document.querySelector(".fa-solid.fa-play"); // Accessing the first icon


slider.addEventListener("click", (e) => {
    i.style.left = "420px";
    i.style.transition = "all 2s cubic-bezier(0.69, -0.09, 0.13, 1.11)";
    slider.style.backgroundPositionX = "0px";
    slider.style.transition = "all 2s cubic-bezier(0.69, -0.09, 0.13, 1.11)";
});
