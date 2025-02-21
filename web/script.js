// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the button and output text
    const button = document.getElementById('clickMeButton');
    const outputText = document.getElementById('outputText');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        outputText.textContent = 'You clicked the button!';
    });
});