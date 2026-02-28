document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if(!menuToggle || !navLinks) return;

    menuToggle.addEventListener("click", () => {

        // Toggle menu open / close
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

    });

    // Close menu when clicking navigation links
    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

});


