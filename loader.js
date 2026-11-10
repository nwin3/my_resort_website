document.addEventListener("DOMContentLoaded", () => {
    loadNavbar();
    loadFooter();
});

// Load Navbar
function loadNavbar() {
    const navPlaceholder = document.getElementById("nav-placeholder");
    if (!navPlaceholder) return;

    // Use absolute path from domain root, with relative fallback for local subfolders
    const isInsidePages = window.location.pathname.includes("/pages/");
    const targetPath = isInsidePages ? "./navbar.html" : "./pages/navbar.html";

    fetch(targetPath)
        .then(response => {
            if (!response.ok) {
                // Secondary fallback attempt via absolute root
                return fetch("/pages/navbar.html");
            }
            return response;
        })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status} loading navbar`);
            return response.text();
        })
        .then(html => {
            navPlaceholder.innerHTML = html;
            initNavbarEvents();
        })
        .catch(err => console.error("Navbar loading error:", err));
}

// Load Footer
function loadFooter() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (!footerPlaceholder) return;

    const isInsidePages = window.location.pathname.includes("/pages/");
    const targetPath = isInsidePages ? "./footer.html" : "./pages/footer.html";

    fetch(targetPath)
        .then(response => {
            if (!response.ok) {
                return fetch("/pages/footer.html");
            }
            return response;
        })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status} loading footer`);
            return response.text();
        })
        .then(html => {
            footerPlaceholder.innerHTML = html;
        })
        .catch(err => console.error("Footer loading error:", err));
}

// Mobile toggle only (Modal code removed since Book Now links directly)
function initNavbarEvents() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
    }
}
