// js/dashboard.js


document.addEventListener('DOMContentLoaded', function () {
    
    const menuItems = document.querySelectorAll('.menu li');
    const mainContent = document.getElementById('main-content');
    
    // Function to initialize charts
    function initializeCharts() {
        // CDN Usage Chart
        const cdnUsageData = {
            labels: ['2021-01-01', '2021-02-01', '2021-03-01', '2021-04-01', '2021-05-01', '2021-06-01', '2021-07-01', '2021-08-01', '2021-09-01', '2021-10-01', '2021-11-01', '2021-12-01'],
            datasets: [{
                label: 'Avg Score',
                data: [0.0002862671172934933, 0.00024181194127832395, 0.00020472827276394267, 0.0002253673753764714, 0.000240497829607859, 0.000284215286638581, 0.00027678805265818877, 0.00027127169031770183, 0.00027484906754976393, 0.00027484906754976393, 0.0002586530493830532, 0.00028988850999713277],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1
            }]
        };

        
        const cdnUsageConfig = {
            type: 'line',
            data: cdnUsageData,
            options: {}
        };

        new Chart(document.getElementById('cdnUsageChart'), cdnUsageConfig);

        // Data Transfer Chart
        const dataTransferData = {
            labels: ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08','2021-09','2021-10','2021-11','2021-12'],
            datasets: [{
                label: 'Data Transfer',
                data: [126, 63, 36, 39, 39, 39, 39, 36, 30, 33, 27, 24],
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

        new Chart(document.getElementById('dataTransferChart'), dataTransferConfig);

        // Unique Visits Chart
        const uniqueVisitsData = {
            labels: ['Jul 22', '23', '24', '25', '26', '27', '28'],
            datasets: [{
                label: 'Unique Visits',
                data: [85432, 91876, 103245, 88901, 117654, 94320, 110789],
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

        new Chart(document.getElementById('uniqueVisitsChart'), uniqueVisitsConfig);
    }

    // Mock user data for demonstration
    const userData = {
        "Alex Turing": {
            gender: "Male",
            age: 30,
            transactions: {
                frequency: "Daily",
                totalAmount: "$5,000",
                countPerGameType: {
                    "Slot Machines": 50,
                    "Poker": 30,
                    "Blackjack": 20
                }
            }
        },
        "Jane Smith": {
            gender: "Female",
            age: 25,
            transactions: {
                frequency: "Weekly",
                totalAmount: "$2,500",
                countPerGameType: {
                    "Slot Machines": 40,
                    "Poker": 10,
                    "Blackjack": 5
                }
            }
        },
        "Alice Johnson": {
            gender: "Female",
            age: 35,
            transactions: {
                frequency: "Monthly",
                totalAmount: "$10,000",
                countPerGameType: {
                    "Slot Machines": 100,
                    "Poker": 50,
                    "Blackjack": 30
                }
            }
        },
        "Bob Brown": {
            gender: "Male",
            age: 40,
            transactions: {
                frequency: "Daily",
                totalAmount: "$7,500",
                countPerGameType: {
                    "Slot Machines": 70,
                    "Poker": 40,
                    "Blackjack": 25
                }
            }
        }
    };

    // Function to load content based on the selected menu item
    async function loadPage(pageName,  user = null) {
        // Clear current content
        mainContent.innerHTML = '';

        // Load specific page content
        if (pageName === 'dashboard') {
            mainContent.innerHTML = `
                <header>
                    <h2>Dashboard</h2>
                    <div class="search-container">
                        <input type="text" class="search-bar" placeholder="Search database">
                        <button class="search-btn">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </header>
                <div class="spacer"></div>
                <div class="charts-container">
                    <div class="chart-item" id="cdnUsageChartContainer">
                        <h3>Avg Score</h3>
                        <canvas id="cdnUsageChart"></canvas>
                    </div>
                    <div class="chart-item" id="dataTransferChartContainer">
                        <h3>Data Transfer</h3>
                        <canvas id="dataTransferChart"></canvas>
                    </div>
                    <div class="chart-item" id="uniqueVisitsChartContainer">
                        <h3>Unique Visits</h3>
                        <canvas id="uniqueVisitsChart"></canvas>
                    </div>
                    <div class="chart-item" id="userListContainer">
                        <h3>User List</h3>
                        <div class="user-list-container">
                            <ul class="user-list">
                                <li>
                                    <span class="username">Alex Turing &nbsp;&nbsp;&nbsp; Risk High &#9888;</span>
                                    <button class="manual-review-btn">Manual Review</button>
                                </li>
                                <li>
                                    <span class="username">Jane Smith   &nbsp;&nbsp;&nbsp;  Risk High &#9888; </span>
                                    <button class="manual-review-btn">Manual Review</button>
                                </li>
                                <li>
                                    <span class="username">Alice Johnson &nbsp;&nbsp;&nbsp; Risk High &#9888;</span>
                                    <button class="manual-review-btn">Manual Review</button>
                                </li>
                                <li>
                                    <span class="username">Bob Brown &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Risk High &#9888;</span>
                                    <button class="manual-review-btn">Manual Review</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="spacer"></div>
                <div class="site-list">
                    <h3>General Data</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Active Users</td>
                                <td>199,452,201</td>
                            </tr>
                            <tr>
                                <td>Total Users</td>
                                <td>906,400,25</td>
                            </tr>
                            <tr>
                                <td>Model Version</td>
                                <td>1.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;

            // Reinitialize charts after loading the dashboard content
            initializeCharts();

            const manualReviewButtons = document.querySelectorAll('.manual-review-btn');
            manualReviewButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const selectedUser = this.getAttribute('data-user');
                    loadPage('monitoring', selectedUser); // Navigate to Monitoring Page with user info
                });
            });
            

        } else if (pageName === 'monitoring') {
            const userInfo2 = {
                name: "Alex Turing",
                customer_id: 11,
                flag_date: "2021-01-05",
                flagged_score:  0.007793606537838146,
                last_wager_amount: 50,
            };
            
            const userName = user || "Unknown User";
            const userInfo = userData[userName] || {
            gender: "N/A",
            age: "N/A",
            transactions: {
                frequency: "N/A",
                totalAmount: "N/A",
                countPerGameType: {},
            },
        };

            // Generate transaction details table
            let transactionDetails = Object.entries(userInfo.transactions.countPerGameType)
            .map(([gameType, count]) => `<tr><td>${gameType}</td><td>${count}</td></tr>`)
            .join("");

            // Update the UI
            mainContent.innerHTML = `
                <header class="header-container">
                    <h2>Monitoring</h2>

                    <!-- Custom Dropdown -->
                    <div class="custom-dropdown">
                        <div class="dropdown-selected">Select User</div>
                        <ul class="dropdown-list">
                            <li data-value="user1">User 1</li>
                            <li data-value="user2">User 2</li>
                            <li data-value="user3">User 3</li>
                        </ul>
                    </div>

                </header>
                <div class="monitoring-page">
                    <h3>Monitoring Details for: ${userInfo2.name}</h3>

                    <h3>Customer ID: ${userInfo2.customer_id}</h3>
                    <h3>Flag date: ${userInfo2.flag_date}</h3>
                    <h3>Flagged Score: ${userInfo2.flagged_score}</h3>
                    <h3>last wager amount: ${userInfo2.last_wager_amount}</h3>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                        <img src="./graph11.PNG" alt="Graph 1" style="width: 48%; height: auto; border-radius: 15px; box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);">
                        <img src="./graph12.PNG" alt="Graph 2" style="width: 48%; height: auto; border-radius: 15px; box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);">
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                        <img src="./graph13.PNG" alt="Graph 3" style="width: 48%; height: auto; border-radius: 15px; box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);">
                        <img src="./graph14.PNG" alt="Graph 4" style="width: 48%; height: auto; border-radius: 15px; box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);">
                    </div>
                    


                </div>
            `;

            document.querySelector(".dropdown-selected").addEventListener("click", function () {
                document.querySelector(".custom-dropdown").classList.toggle("active");
            });
            
            // Close dropdown when clicking outside
            document.addEventListener("click", function (event) {
                const dropdown = document.querySelector(".custom-dropdown");
                if (!dropdown.contains(event.target)) {
                    dropdown.classList.remove("active");
                }
            });
            
        } else if (pageName === 'account') {
            mainContent.innerHTML = `
                <header>
                    <h2>Account Settings</h2>
                </header>
                <div class="account-page">
                    <div class="operator-details">
                        <h3>Operator Details</h3>
                        <p><span class="label">Name:</span> Alex Turing</p>
                        <p><span class="label">Email:</span> johndoe@example.com</p>
                        <p><span class="label">Role:</span> Administrator</p>
                        <p><span class="label">Status:</span> Active</p>
                        <p><span class="label">Last Login:</span> 2023-10-01 14:23</p>
                    </div>
                    <h2>Update Your Account</h2>
                    <form id="account-form">
                        <label for="username">Username:</label>
                        <input type="text" id="username" placeholder="Enter your username">

                        <label for="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter your email">

                        <label for="password">Password:</label>
                        <input type="password" id="password" placeholder="Enter your password">

                        <button type="submit">Save Changes</button>
                    </form>
                </div>
            `;
        } else if (pageName === 'settings') {
            mainContent.innerHTML = `
                <header>
                    <h2>Settings</h2>
                </header>
                <div class="settings-page">
                    <div class="settings-section">
                        <h3>Theme Customization</h3>
                        <div class="settings-option">
                            <label>Dark Mode</label>
                            <label class="toggle-switch">
                                <input type="checkbox" id="dark-mode-toggle">
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="settings-option">
                            <label>Accent Color</label>
                            <input type="color" id="accent-color-picker" value="#ff7e5f">
                        </div>
                    </div>
                    <div class="settings-section">
                        <h3>Notifications</h3>
                        <div class="settings-option">
                            <label>Email Notifications</label>
                            <label class="toggle-switch">
                                <input type="checkbox" id="email-notifications-toggle">
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="settings-option">
                            <label>Push Notifications</label>
                            <label class="toggle-switch">
                                <input type="checkbox" id="push-notifications-toggle">
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div class="settings-section">
                        <h3>Font Size</h3>
                        <div class="range-slider">
                            <input type="range" id="font-size-slider" min="12" max="24" value="16">
                        </div>
                    </div>
                </div>
            `;
        } else if (pageName === 'help') {
            mainContent.innerHTML = `
                <header>
                    <h2>Help</h2>
                </header>
                <div class="help-page">
                    <div class="help-section">
                        <h3>About the Gambling Addiction Detection Model</h3>
                        <p>This machine learning model is designed to identify patterns of behavior indicative of gambling addiction among users. It analyzes user activity, transaction history, and other behavioral data to flag potential risks.</p>
                    </div>
                    <div class="help-section">
                        <h3>How It Works</h3>
                        <p>The model uses advanced algorithms to process data and detect anomalies. Here’s an overview of its workflow:</p>
                        <ul>
                            <li><strong>Data Collection:</strong> Tracks user interactions, transactions, and time spent on gambling platforms.</li>
                            <li><strong>Feature Extraction:</strong> Extracts relevant features such as frequency of transactions, amount spent, and login patterns.</li>
                            <li><strong>Prediction:</strong> Applies a classification algorithm to predict the likelihood of gambling addiction.</li>
                            <li><strong>Flagging:</strong> Flags high-risk users for manual review by administrators.</li>
                        </ul>
                    </div>
                    <div class="help-section">
                        <h3>Use Cases</h3>
                        <p>The model is used in the following scenarios:</p>
                        <ul>
                            <li><strong>Risk Mitigation:</strong> Identifies users at risk of developing gambling addiction and allows early intervention.</li>
                            <li><strong>Compliance:</strong> Ensures compliance with regulatory requirements for responsible gambling practices.</li>
                            <li><strong>User Support:</strong> Provides insights to customer support teams for personalized assistance to flagged users.</li>
                        </ul>
                    </div>
                </div>
            `;
        } else if (pageName === 'service status') {
            mainContent.innerHTML = `
                <header>
                    <h2>Service Status</h2>
                </header>
                <div class="service-status-page">
                    <div class="status-section">
                        <h3><span class="status-indicator active"></span> App Service</h3>
                        <div class="status-details">
                            <p>Status: <strong>Active</strong></p>
                            <p>Uptime: <strong>99.9%</strong></p>
                            <p>Response Time: <strong>200ms</strong></p>
                        </div>
                    </div>
                    <div class="status-section">
                        <h3><span class="status-indicator active"></span> Web Service</h3>
                        <div class="status-details">
                            <p>Status: <strong>Active</strong></p>
                            <p>Uptime: <strong>99.8%</strong></p>
                            <p>Response Time: <strong>150ms</strong></p>
                        </div>
                    </div>
                    <div class="status-section">
                        <h3><span class="status-indicator inactive"></span> Guard System</h3>
                        <div class="status-details">
                            <p>Status: <strong>Inactive</strong></p>
                            <p>Uptime: <strong>95.0%</strong></p>
                            <p>Response Time: <strong>N/A</strong></p>
                        </div>
                    </div>
                    <div class="status-section">
                        <h3><span class="status-indicator active"></span> Notification System</h3>
                        <div class="status-details">
                            <p>Status: <strong>Active</strong></p>
                            <p>Uptime: <strong>99.7%</strong></p>
                            <p>Response Time: <strong>100ms</strong></p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            mainContent.innerHTML = `<h2>${pageName.charAt(0).toUpperCase() + pageName.slice(1)} Page</h2>`;
        }
    }

    // Add click event listeners to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            menuItems.forEach(li => li.classList.remove('active'));

            // Add active class to the clicked item
            this.classList.add('active');

            // Load the corresponding page
            const pageName = this.getAttribute('data-page');
            loadPage(pageName);
        });
    });

    // Load default page on initial load
    loadPage('dashboard');
});