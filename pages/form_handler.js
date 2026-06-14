// Inside your event listener
const formData = new URLSearchParams(new FormData(form));

fetch('https://script.google.com/macros/s/AKfycbzlKMC4-1bUSZ9J6ttXvEAPmfeNFjeTiUrAiY9GDFc00a7OqDxh6-pm6jNdWDnRvVtV/exec', {
    method: 'POST',
    body: formData,
    mode: 'no-cors' // <-- THIS IS THE KEY FIX
})
.then(() => {
    // With no-cors, we can't 'see' the response, but we know it fired
    alert('Inquiry sent successfully!');
    form.reset();
})
.catch(error => {
    console.error('Error!', error);
    alert('Something went wrong. Please try again.');
})
.finally(() => {
    submitBtn.disabled = false;
    submitBtn.innerText = "Send Inquiry";
    submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
});
