document.addEventListener("DOMContentLoaded", () => {
    loadNavbar();
    loadFooter();
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

// Navbar & Modal Event Listeners
function initNavbarEvents() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const bookButtons = document.querySelectorAll('.book-now-btn');

    // Mobile menu toggle
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
    }

    // Open booking modal
    bookButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
            if (menu && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        });
    });

    // Close button
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
    }

    // Close on outside overlay click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }
}
