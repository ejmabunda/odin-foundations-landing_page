// Handle the mobile menu toggle functionality.
let toggle = document.getElementById("menu-toggle");
toggle.addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("closed");
});