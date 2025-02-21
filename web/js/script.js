document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate login logic
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});