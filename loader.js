// loader.js
// loader.js
fetch('/pages/nav_bar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
    
    const toggleBtn = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            // Toggle Tailwind's 'hidden' class
            menu.classList.toggle('hidden');
            // Reset style to ensure it doesn't conflict
            menu.style.display = menu.classList.contains('hidden') ? 'none' : 'flex';
        });
    }
  });
