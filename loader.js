document.addEventListener("DOMContentLoaded", () => {
    loadNavbar();
    loadFooter();
});

// Global functions attached directly to window
window.openBookingModal = function() {
    const modal = document.getElementById("booking-modal");
    if (modal) {
        modal.style.setProperty("display", "flex", "important");
    }
    const menu = document.getElementById("mobile-menu");
    if (menu) {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
    }
};

window.closeBookingModal = function() {
    const modal = document.getElementById("booking-modal");
    if (modal) {
        modal.style.setProperty("display", "none", "important");
    }
};

// Global click delegation for all .book-now-btn elements (including buttons in hero/body)
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".book-now-btn");
    if (btn) {
        e.preventDefault();
        window.openBookingModal();
    }
});

// Load Navbar
function loadNavbar() {
    const navPlaceholder = document.getElementById("nav-placeholder");
    if (!navPlaceholder) return;

    const isInsidePages = window.location.pathname.includes("/pages/");
    const targetPath = isInsidePages ? "./navbar.html" : "./pages/navbar.html";

    fetch(targetPath)
        .then(response => {
            if (!response.ok) {
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
            initMobileToggle();
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

// Mobile toggle setup
function initMobileToggle() {
    const toggle = document.getElementById("mobile-toggle");
    const menu = document.getElementById("mobile-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            menu.classList.toggle("flex");
        });
    }
}
