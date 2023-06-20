function toggleImages() {
    var imagesDiv = document.getElementById("images");
    var utilisateursDiv = document.getElementById("utilisateurs");

    imagesDiv.style.display = "block";
    utilisateursDiv.style.display = "none";
}

function toggleUsers() {
    var imagesDiv = document.getElementById("images");
    var utilisateursDiv = document.getElementById("utilisateurs");

    imagesDiv.style.display = "none";
    utilisateursDiv.style.display = "block";
}

// Carrousel
var carousel = document.querySelector('.carousel');
var slideWidth = carousel.offsetWidth / 8; // Largeur de chaque diapositive

carousel.addEventListener('scroll', function() {
    var currentPosition = Math.round(carousel.scrollLeft / slideWidth);
    carousel.scrollLeft = currentPosition * slideWidth;
});











