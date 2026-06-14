const form = document.getElementById('inquiryForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 1. UI Feedback
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

    // 2. Prepare Data
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);

    // 3. Fire the request
    fetch('https://script.google.com/macros/s/AKfycbzlKMC4-1bUSZ9J6ttXvEAPmfeNFjeTiUrAiY9GDFc00a7OqDxh6-pm6jNdWDnRvVtV/exec', {
        method: 'POST',
        body: searchParams,
        mode: 'no-cors'
    })
    .finally(() => {
        // 4. Fake timer for User Experience
        setTimeout(() => {
            alert('Inquiry sent successfully!');
            form.reset();
            
            // 5. Reset UI
            submitBtn.disabled = false;
            submitBtn.innerText = "Send Inquiry";
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }, 1000); 
    });
});
