let slider = document.querySelector(".slider"); // Accessing the first slider element
let i = document.querySelector(".fa-solid.fa-play"); // Accessing the first icon
let a = 0;
let body = document.querySelector("body")
let main = document.querySelector("main")
let all = document.querySelectorAll(".a")

slider.addEventListener("click", (e) => {
    if (a==0){
    main.style.backgroundColor = "black";
    main.style.transition = "all 2000ms ease";
    i.style.left = "440px";
    i.style.transition = "all 2s cubic-bezier(0.69, -0.09, 0.13, 1.11)";
    all.forEach((element) => {
        element.style.color = "white";
        element.style.transition = "all 2s cubic-bezier(0.69, -0.09, 0.13, 1.11)"
    });
    
    slider.style.backgroundPositionX = "0px";
    slider.style.transition = "all 2s cubic-bezier(0.69, -0.09, 0.13, 1.11)";
    a=1;
    }
    else {
        all.forEach((element) => {
            element.style.color = "black";
            element.style.transition = "all 2s cubic-bezier(0.69, -0.09, 0.13, 1.11)"
        });
        
        i.style.left = "10px";
        main.style.backgroundColor = "#D5FF3F";
        main.style.transition = "all 2000ms ease";
        i.style.transition = "all 2s cubic-bezier(0.69, -0.09, 0.13, 1.11)";
        slider.style.backgroundPositionX = "-200px";
        slider.style.transition = "all 2s cubic-bezier(0.69, -0.09, 0.13, 1.11)";
        a=0;
    }
});
