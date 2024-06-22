let tag = document.querySelector(".header");
let resetbtn = document.querySelector("#reset-btn");
let reset = document.querySelector(".reset");
let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");
let modebtn = document.querySelector("#bauble_check");
let mode = "light";

modebtn.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        sun.style.color = "rgb(255, 179, 0)";
        moon.style.color = "blue";
        tag.style.color = 'white';
    } else {
        mode = "light";
        document.querySelector("body").style.backgroundColor = "#548687";
        sun.style.color = "black";
        moon.style.color = "black";
        tag.style.color = 'black';
    }
    console.log(mode);
});