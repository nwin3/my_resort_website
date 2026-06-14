const form = document.getElementById('inquiryForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    
    fetch(https://script.google.com/macros/s/AKfycbzlKMC4-1bUSZ9J6ttXvEAPmfeNFjeTiUrAiY9GDFc00a7OqDxh6-pm6jNdWDnRvVtV/exec', {
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
