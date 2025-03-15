document.addEventListener("DOMContentLoaded", function() {
    console.log("DZInformation site loaded successfully!");

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "red";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "black";
        });
    });
});
