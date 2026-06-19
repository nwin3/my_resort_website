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
            const isHidden = menu.style.getPropertyValue('display') === 'none' || menu.style.display === 'none !important';
            
            if (isHidden) {
                // Show as flex so the internal elements center correctly
                menu.style.setProperty('display', 'flex', 'important');
            } else {
                menu.style.setProperty('display', 'none', 'important');
            }
        });
    }
  });
