// loader.js

// loader.js
document.addEventListener("DOMContentLoaded", () => {
    // Load Navigation
    fetch('/pages/navbar.html')
        .then(response => response.text())
        .then(data => {
            const navPlaceholder = document.getElementById('nav-placeholder');
            if (navPlaceholder) {
                navPlaceholder.innerHTML = data;
                // Add the toggle functionality logic here again for the mobile button
                const toggleBtn = document.getElementById('mobile-toggle');
                const menu = document.getElementById('mobile-menu');
                if (toggleBtn) {
                    toggleBtn.addEventListener('click', () => {
                        menu.style.setProperty('display', menu.style.getPropertyValue('display') === 'none' ? 'flex' : 'none', 'important');
                    });
                }
            }
        });

    // Load Footer
    fetch('/pages/footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        });
});
