document.addEventListener("DOMContentLoaded", function () {
    console.log("DZInformation loaded successfully");

    // Exemple de gestion de clic pour les articles
    document.querySelectorAll("article h2").forEach(title => {
        title.addEventListener("click", function () {
            alert("Vous avez cliqué sur: " + this.textContent);
        });
    });

    // Ajout d'une interaction sur le menu mobile si nécessaire
    const menuButton = document.querySelector(".menu-toggle");
    if (menuButton) {
        menuButton.addEventListener("click", function () {
            document.querySelector("nav ul").classList.toggle("active");
        });
    }
});
