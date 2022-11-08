// Remove and add text from cursus
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