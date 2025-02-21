// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // CDN Usage Chart
    const cdnUsageData = {
        labels: ['Jul 1', 'Jul 7', 'Jul 14', 'Jul 21', 'Jul 28'],
        datasets: [{
            label: 'CDN Usage',
            data: [70, 40, 100, 80, 120],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.5
        }]
    };

    const cdnUsageConfig = {
        type: 'line',
        data: cdnUsageData,
        options: {}
    };

    const cdnUsageChart = new Chart(
        document.getElementById('cdnUsageChart'),
        cdnUsageConfig
    );

    // Data Transfer Chart
    const dataTransferData = {
        labels: ['Jul 22', '23', '24', '25', '26', '27', '28'],
        datasets: [{
            label: 'Data Transfer',
            data: [10, 20, 30, 40, 50, 60, 70],
            fill: false,
            borderColor: 'rgba(54, 162, 235, 1)',
            tension: 0.1
        }]
    };

    const dataTransferConfig = {
        type: 'line',
        data: dataTransferData,
        options: {}
    };

    const dataTransferChart = new Chart(
        document.getElementById('dataTransferChart'),
        dataTransferConfig
    );

    // Unique Visits Chart
    const uniqueVisitsData = {
        labels: ['Jul 22', '23', '24', '25', '26', '27', '28'],
        datasets: [{
            label: 'Unique Visits',
            data: [100, 200, 300, 400, 500, 600, 700],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const uniqueVisitsConfig = {
        type: 'bar',
        data: uniqueVisitsData,
        options: {}
    };

    const uniqueVisitsChart = new Chart(
        document.getElementById('uniqueVisitsChart'),
        uniqueVisitsConfig
    );

    // Resource Usage Chart
    const resourceUsageData = {
        labels: ['Disk Usage', 'CDN Usage'],
        datasets: [{
            data: [3, 73],
            backgroundColor: [
                'rgba(202, 125, 141, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            hoverOffset: 4
        }]
    };

    const resourceUsageConfig = {
        type: 'doughnut',
        data: resourceUsageData,
        options: {}
    };

    const resourceUsageChart = new Chart(
        document.getElementById('resourceUsageChart'),
        resourceUsageConfig
    );

        // Select all manual review buttons
        const buttons = document.querySelectorAll('.manual-review-btn');

        // Add click event listeners to each button
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Get the username from the sibling span element
                const username = button.previousElementSibling.textContent;
    
                // Perform an action (e.g., log the username)
                console.log(`Manual review requested for: ${username}`);
                
                // Optionally, you could trigger a modal or redirect to another page
                alert(`Manual review requested for: ${username}`);
            });
        });
});