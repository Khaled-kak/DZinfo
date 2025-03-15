document.addEventListener("DOMContentLoaded", function () {
    // Gérer les événements de clic sur les liens de navigation
    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Navigation vers : " + this.textContent);
        });
    });

    // Simuler un effet sur les articles à survoler
    let articles = document.querySelectorAll(".article");
    articles.forEach(article => {
        article.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#f0f8ff";
        });
        article.addEventListener("mouseout", function () {
            this.style.backgroundColor = "white";
        });
    });

    // Ajouter une action sur les boutons d'analyse
    let analyzeButtons = document.querySelectorAll(".analyze-btn");
    analyzeButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Analyse approfondie en cours...");
        });
    });
});
