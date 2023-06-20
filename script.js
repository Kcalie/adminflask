function toggleImages() {
    var imagesDiv = document.getElementById("images");
    var utilisateursDiv = document.getElementById("utilisateurs");
    var administrateursDiv = document.getElementById("administrateurs");
    var statistiquesDiv = document.getElementById("statistiques");


    imagesDiv.style.display = "block";
    utilisateursDiv.style.display = "none";
    administrateursDiv.style.display = "none";
    statistiquesDiv.style.display = "none";


    // Enregistrer l'état de l'affichage dans le stockage local
    localStorage.setItem("currentPage", "images");
}

function toggleUsers() {
    var imagesDiv = document.getElementById("images");
    var utilisateursDiv = document.getElementById("utilisateurs");
    var administrateursDiv = document.getElementById("administrateurs");
    var statistiquesDiv = document.getElementById("statistiques");


    imagesDiv.style.display = "none";
    utilisateursDiv.style.display = "block";
    administrateursDiv.style.display = "none";
    statistiquesDiv.style.display = "none";


    // Enregistrer l'état de l'affichage dans le stockage local
    localStorage.setItem("currentPage", "utilisateurs");
}

function toggleAdministrateurs() {
    var imagesDiv = document.getElementById("images");
    var utilisateursDiv = document.getElementById("utilisateurs");
    var administrateursDiv = document.getElementById("administrateurs");
    var statistiquesDiv = document.getElementById("statistiques");


    imagesDiv.style.display = "none";
    utilisateursDiv.style.display = "none";
    administrateursDiv.style.display = "block";
    statistiquesDiv.style.display = "none";


    // Enregistrer l'état de l'affichage dans le stockage local
    localStorage.setItem("currentPage", "administrateurs");
}

function toggleStatistiques() {
    var imagesDiv = document.getElementById("images");
    var utilisateursDiv = document.getElementById("utilisateurs");
    var administrateursDiv = document.getElementById("administrateurs");
    var statistiquesDiv = document.getElementById("statistiques");


    imagesDiv.style.display = "none";
    utilisateursDiv.style.display = "none";
    administrateursDiv.style.display = "none";
    statistiquesDiv.style.display = "block";


    // Enregistrer l'état de l'affichage dans le stockage local
    localStorage.setItem("currentPage", "administrateurs");
}
// Au chargement de la page, restaurer l'état de l'affichage en fonction de la valeur enregistrée dans le stockage local
window.onload = function() {
    var currentPage = localStorage.getItem("currentPage");
  
    if (currentPage === "images") {
        toggleImages();
    } else if (currentPage === "utilisateurs") {
        toggleUsers();
    } else if (currentPage === "administrateurs") {
        toggleAdministrateurs();
    } else if (currentPage === "statistiques") {
        toggleStatistiques();
    }
};

// Carrousel
var carousel = document.querySelector('.carousel');
var slideWidth = carousel.offsetWidth / 8; // Largeur de chaque diapositive

carousel.addEventListener('scroll', function() {
    var currentPosition = Math.round(carousel.scrollLeft / slideWidth);
    carousel.scrollLeft = currentPosition * slideWidth;
});

