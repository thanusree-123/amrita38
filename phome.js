// home.js
// home.js

// JavaScript for handling form submission (This is just a basic example)
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You can add your login authentication logic here for a real online banking platform.
    // For this example, we'll just display an alert.
    alert(`Logged in as ${username}`);
    
});

// Function to display a message when the "Learn More" button is clicked
document.getElementById('loginForm').addEventListener('submit', function() {
    const message = document.getElementById('message');
    message.textContent = "Thank you for your interest in our Online Banking platform. We're dedicated to providing a secure and efficient banking experience.";
    message.style.display = 'block';
});
