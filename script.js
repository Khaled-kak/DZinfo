document.addEventListener("DOMContentLoaded", function() {
    console.log("DZInformation site loaded successfully!");

    // Exemple d'interaction : Changer la couleur du texte du titre au survol
    let title = document.querySelector("h2");
    if (title) {
        title.addEventListener("mouseover", function() {
            title.style.color = "#d9534f"; // Rouge foncé
        });
        title.addEventListener("mouseout", function() {
            title.style.color = "#333"; // Retour à la couleur initiale
        });
    }

    // Exemple d'interaction : Bouton d'alerte sur la page contact
    let contactBtn = document.querySelector("#contact-btn");
    if (contactBtn) {
        contactBtn.addEventListener("click", function() {
            alert("Merci de nous contacter ! Nous vous répondrons rapidement.");
        });
    }
});
