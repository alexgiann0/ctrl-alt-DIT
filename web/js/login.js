document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-form button');

    // Add a click event listener to the button
    loginButton.addEventListener('click', (event) => {
        // Get the button's bounding rectangle
        const rect = loginButton.getBoundingClientRect();

        // Calculate the mouse position relative to the button's content area
        const x = event.clientX - rect.left - parseFloat(window.getComputedStyle(loginButton).paddingLeft);
        const y = event.clientY - rect.top - parseFloat(window.getComputedStyle(loginButton).paddingTop);

        // Create a new raindrop element
        const raindrop = document.createElement('span');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${x}px`;
        raindrop.style.top = `${y}px`;

        // Append the raindrop to the button
        loginButton.appendChild(raindrop);

        // Remove the raindrop after the animation ends
        raindrop.addEventListener('animationend', () => {
            raindrop.remove();
        });
    });

    // Form validation
    const loginForm = document.getElementById('loginForm');

    // Hardcoded credentials for demonstration purposes
    const validUsername = 'admin';
    const validPassword = 'password';

    // Add a submit event listener to the form
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Get the input values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validate the credentials
        if (username === validUsername && password === validPassword) {
            //alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to the dashboard
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
}); 