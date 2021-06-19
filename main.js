var slideIndex = 0;
pokaziSlajdove()

function pokaziSlajdove() {
    var i;
    var slajdovi = document.getElementsByClassName("slajdovi");
    for (i = 0; i < slajdovi.length; i++) {
        slajdovi[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slajdovi.length) {
        slideIndex = 1;
    }
    slajdovi[slideIndex-1].style.display = "block";
    setTimeout(pokaziSlajdove, 3000);
}
