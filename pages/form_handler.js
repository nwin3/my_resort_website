const form = document.getElementById('inquiryForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 1. UI Feedback: Show "Sending..."
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

    const formData = new URLSearchParams(new FormData(form));

    // 2. Fire the request
    fetch('https://script.google.com/macros/s/AKfycbzlKMC4-1bUSZ9J6ttXvEAPmfeNFjeTiUrAiY9GDFc00a7OqDxh6-pm6jNdWDnRvVtV/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    .finally(() => {
        // 3. Fake delay for UX (wait 1 second so the user notices the change)
        setTimeout(() => {
            alert('Inquiry sent successfully!');
            form.reset();
            
            // 4. Reset UI
            submitBtn.disabled = false;
            submitBtn.innerText = "Send Inquiry";
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }, 1000); 
    });
});
