// Exemple de fonction JavaScript pour ajouter de l'interactivité
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter un effet de survol aux articles
    const articles = document.querySelectorAll('#analyse-par-categorie article');
    articles.forEach(article => {
        article.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        article.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Ajouter une fonctionnalité de défilement fluide pour les liens de navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
