document.addEventListener("DOMContentLoaded", () => {
    const navPlaceholder = document.getElementById("nav-placeholder");

    if (navPlaceholder) {
        // Adjust path if your navbar.html lives inside /pages/ or root
        const navPath = window.location.pathname.includes("/pages/") ? "../navbar.html" : "/navbar.html";

        fetch(navPath)
            .then(res => res.text())
            .then(html => {
                navPlaceholder.innerHTML = html;
                initNavbarEvents(); // Initialize listeners AFTER insertion
            })
            .catch(err => console.error("Error loading navbar:", err));
    }

    // Similar logic for footer if present...
});

function initNavbarEvents() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const bookButtons = document.querySelectorAll('.book-now-btn');

    // Mobile Hamburger
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
    }

    // Open Modal
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

    // Close Modal Button
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
