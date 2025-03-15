document.addEventListener("DOMContentLoaded", function () {
    // Example functionality: Toggle active class on navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
    
    // Example Poll Button Interaction
    const pollButtons = document.querySelectorAll(".polls button");
    pollButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert(`Vous avez voté: ${this.textContent}`);
        });
    });
});
