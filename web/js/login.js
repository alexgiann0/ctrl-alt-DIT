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
});