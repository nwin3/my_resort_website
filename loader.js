// loader.js
// loader.js
fetch('/pages/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
    
    const toggleBtn = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', function() {
            // Check the current computed style
            if (menu.style.display === 'none' || menu.style.display === 'none !important') {
                menu.style.setProperty('display', 'flex', 'important');
            } else {
                menu.style.setProperty('display', 'none', 'important');
            }
        });
    }
  });
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
