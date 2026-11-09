document.addEventListener("DOMContentLoaded", () => {
    loadNavbar();
});

function loadNavbar() {
    const navPlaceholder = document.getElementById("nav-placeholder");
    if (!navPlaceholder) return;

    // If already inside /pages/, fetch directly. Otherwise, step into pages/
    const isInsidePages = window.location.pathname.includes("/pages/");
    const targetPath = isInsidePages ? "navbar.html" : "pages/navbar.html";

    fetch(targetPath)
        .then(response => {
            if (!response.ok) {
                // Secondary fallback in case of local file server quirks
                const fallback = isInsidePages ? "./navbar.html" : "./pages/navbar.html";
                return fetch(fallback);
            }
            return response;
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${targetPath} (HTTP ${response.status})`);
            }
            return response.text();
        })
        .then(html => {
            navPlaceholder.innerHTML = html;
            initNavbarEvents(); // Bind popup & menu click handlers
        })
        .catch(err => {
            console.error("Navbar loading error:", err);
        });
}

function initNavbarEvents() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const bookButtons = document.querySelectorAll('.book-now-btn');

    // Toggle Mobile Drawer
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
    }

    // Open Booking Notice Modal
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

    // Close Modal Button (X)
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
    }

    // Close Modal on Outside Backdrop Click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }
}
