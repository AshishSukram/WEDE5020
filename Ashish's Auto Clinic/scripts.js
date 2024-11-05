// Form validation and submission function
function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const formResponse = document.getElementById('formResponse');

    // Simple validation
    if (!name || !email || !phone || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone validation (example for 10-digit numbers)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Display success message
    formResponse.style.display = 'block';
    document.getElementById('contactForm').reset();
}
