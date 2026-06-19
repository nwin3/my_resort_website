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
            // Check current display
            if (menu.style.getPropertyValue('display') === 'none') {
                menu.style.setProperty('display', 'block', 'important');
            } else {
                menu.style.setProperty('display', 'none', 'important');
            }
        });
    }
  });
