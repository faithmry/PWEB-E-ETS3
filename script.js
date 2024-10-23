document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    var alertBox = document.getElementById('alertBox');

    alertBox.style.display = 'none';
    alertBox.innerHTML = '';

    if (!name || !email || !phone || !message) {
        alertBox.innerHTML = 'All fields are required.';
        alertBox.style.display = 'block';
        return;
    }

    var namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        alertBox.innerHTML = 'Name must contain only letters and spaces.';
        alertBox.style.display = 'block';
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alertBox.innerHTML = 'Please enter a valid email address.';
        alertBox.style.display = 'block';
        return;
    }

    var phonePattern = /^\d{10,15}$/; 
    if (!phonePattern.test(phone)) {
        alertBox.innerHTML = 'Phone number must contain between 10 and 15 digits.';
        alertBox.style.display = 'block';
        return;
    }

    alertBox.innerHTML = 'Form submitted successfully!';
    alertBox.style.display = 'block';
});