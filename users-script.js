// Mock user data (replace with real data later)
const userData = [
    {
        name: 'CryptoScammer123',
        username: '@cryptoscammer123',
        riskLevel: 'high',
        activityLevel: 'High',
        flags: ['Multiple Reported Scams', 'Fake Giveaways'],
        reportCount: 15
    },
    {
        name: 'TradingGuru_XX',
        username: '@trading_guru_xx',
        riskLevel: 'medium',
        activityLevel: 'Medium',
        flags: ['Suspicious Links', 'New Account'],
        reportCount: 7
    },
    {
        name: 'Whale_Signals',
        username: '@whale_signals',
        riskLevel: 'high',
        activityLevel: 'High',
        flags: ['Pump & Dump History', 'Bot Activity'],
        reportCount: 12
    },
    {
        name: 'Crypto_Master',
        username: '@crypto_master',
        riskLevel: 'medium',
        activityLevel: 'Medium',
        flags: ['Misleading Info', 'Spam Activity'],
        reportCount: 8
    }
];

// DOM Elements
const usersGrid = document.querySelector('.users-grid');
const sortSelect = document.getElementById('sort-users');
const filterSelect = document.getElementById('filter-users');
const searchInput = document.getElementById('search-users');
const scanButton = document.querySelector('.scan-button');
const statusDot = document.querySelector('.status-dot');

// Render a single user card
function renderUserCard(user, index) {
    return `
        <div class="user-card" style="--index: ${index}">
            <div class="user-risk risk-${user.riskLevel}">${user.riskLevel.toUpperCase()}</div>
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="user-details">
                    ${user.username} • Activity: ${user.activityLevel}
                </div>
            </div>
            <div class="user-flags">
                ${user.flags.map(flag => `<span class="flag">${flag}</span>`).join('')}
            </div>
            <div class="channel-stats">
                <div class="stat">
                    <span class="stat-label">Reports</span>
                    <span class="stat-value">${user.reportCount}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Risk Score</span>
                    <span class="stat-value">${user.riskLevel === 'high' ? '8.5' : user.riskLevel === 'medium' ? '6.2' : '3.1'}</span>
                </div>
            </div>
        </div>
    `;
}

// Render all users
function renderUsers(users) {
    usersGrid.innerHTML = users.map((user, index) => renderUserCard(user, index)).join('');
}

// Filter and sort users
function updateUsersList() {
    let filteredUsers = [...userData];
    
    // Apply filters
    const filterValue = filterSelect.value;
    if (filterValue !== 'all') {
        filteredUsers = filteredUsers.filter(user => user.riskLevel === filterValue);
    }
    
    // Apply search
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredUsers = filteredUsers.filter(user => 
            user.name.toLowerCase().includes(searchTerm) ||
            user.username.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sorting
    const sortValue = sortSelect.value;
    filteredUsers.sort((a, b) => {
        switch(sortValue) {
            case 'risk':
                const riskOrder = { high: 3, medium: 2, low: 1 };
                return riskOrder[b.riskLevel] - riskOrder[a.riskLevel];
            case 'activity':
                const activityOrder = { 'Very High': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
                return activityOrder[b.activityLevel] - activityOrder[a.activityLevel];
            case 'reports':
                return b.reportCount - a.reportCount;
            default:
                return 0;
        }
    });
    
    renderUsers(filteredUsers);
}

// Event Listeners
sortSelect.addEventListener('change', updateUsersList);
filterSelect.addEventListener('change', updateUsersList);
searchInput.addEventListener('input', updateUsersList);

// Simulate scanning process
async function simulateScan() {
    statusDot.classList.add('scanning');
    scanButton.style.opacity = '0.7';
    scanButton.style.pointerEvents = 'none';
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    statusDot.classList.remove('scanning');
    statusDot.classList.add('success');
    scanButton.style.opacity = '1';
    scanButton.style.pointerEvents = 'auto';
    
    // Update the display
    updateUsersList();
}

scanButton.addEventListener('click', simulateScan);

// Initialize the page
document.addEventListener('DOMContentLoaded', updateUsersList);