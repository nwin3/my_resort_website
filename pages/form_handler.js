const form = document.getElementById('inquiryForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    
    fetch('YOUR_GOOGLE_SCRIPT_URL', {
        method: 'POST',
        body: new URLSearchParams(new FormData(form)),
        redirect: 'follow'
    })
    .then(r => r.ok ? alert('Sent!') : Promise.reject())
    .catch(() => alert('Error!'))
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Inquiry";
    });
});
