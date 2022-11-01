const buttonPython = document.getElementById("python");
const buttonExcel = document.getElementById("excel");

buttonPython.onclick = function () {
    var x = document.getElementsByClassName("cursus__p--python")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

buttonExcel.onclick = function () {
    var y = document.getElementsByClassName("cursus__p--excel")[0];
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}





