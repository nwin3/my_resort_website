const form = document.getElementById('inquiryForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 1. Disable the button and change text
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

    const formData = new URLSearchParams(new FormData(form));

    fetch('https://script.google.com/macros/library/d/18xfFTncGjPRcxDIn5flxkYV3Islb9aqbJS6K1VILztdDSW_0AdN1xQDU/12', {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    })
        .then(response => {
            if (response.ok) {
                alert('Inquiry sent successfully!');
                form.reset();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error!', error);
            alert('Something went wrong. Please try again.');
        })
        .finally(() => {
            // 2. Re-enable the button regardless of success or failure
            submitBtn.disabled = false;
            submitBtn.innerText = "Send Inquiry";
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        });
});
