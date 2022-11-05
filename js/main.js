// const buttonPython = document.getElementById("python");
// const buttonExcel = document.getElementById("excel");

// buttonPython.onclick = function () {
//     var x = document.getElementsByClassName("cursus__p--python")[0];
//     x.style.display = "block";
//     var y = document.getElementsByClassName("cursus__p--excel")[0];
//     y.style.display = "none";
// }

// buttonExcel.onclick = function () {
//     var x = document.getElementsByClassName("cursus__p--python")[0];
//     x.style.display = "none";
//     var y = document.getElementsByClassName("cursus__p--excel")[0];
//     y.style.display = "block";
// }

// Remove and add text from curses
var buttons = document.getElementsByClassName("listItem__btn");
var paragraphs = document.querySelectorAll(".cursus__figure > .cursus__p");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        for (let j = 0; j < paragraphs.length; j++) {
            paragraphs[j].style.display = "none";
        }
        paragraphs[i].style.display = "block";
    }
}