// Mock channel data (replace with real data later)
const channelData = [
    {
        name: 'CryptoScams Alert',
        link: 't.me/cryptoscams',
        members: 12500,
        messagesPerDay: 458,
        riskLevel: 'high',
        flags: ['Suspicious Activity', 'Multiple Reports']
    },
    {
        name: 'FakeTrading Signals',
        link: 't.me/faketrading',
        members: 8200,
        messagesPerDay: 223,
        riskLevel: 'medium',
        flags: ['Misleading Info', 'False Signals']
    },
    {
        name: 'Pump&Dump Group',
        link: 't.me/pumpdump',
        members: 15100,
        messagesPerDay: 892,
        riskLevel: 'high',
        flags: ['Market Manipulation', 'Pump & Dump Activity']
    },
    {
        name: 'ScamPromoters',
        link: 't.me/scampromo',
        members: 5400,
        messagesPerDay: 167,
        riskLevel: 'high',
        flags: ['Scam Promotion', 'Suspicious Activity']
    }
];

// DOM Elements
const channelsGrid = document.querySelector('.channels-grid');
const sortSelect = document.getElementById('sort-channels');
const filterSelect = document.getElementById('filter-channels');
const searchInput = document.getElementById('search-channels');
const scanButton = document.querySelector('.scan-button');
const statusDot = document.querySelector('.status-dot');

// Render a single channel card
function renderChannelCard(channel, index) {
    return `
        <div class="channel-card" style="--index: ${index}">
            <div class="channel-info">
                <div class="channel-title">${channel.name}</div>
                <a href="https://${channel.link}" class="channel-link" target="_blank">${channel.link}</a>
            </div>
            <div class="channel-meta">
                <span>Risk Level: <strong class="risk-${channel.riskLevel}">${channel.riskLevel.toUpperCase()}</strong></span>
            </div>
            <div class="channel-stats">
                <div class="stat">
                    <span class="stat-label">Members</span>
                    <span class="stat-value">${channel.members.toLocaleString()}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Messages/Day</span>
                    <span class="stat-value">${channel.messagesPerDay}</span>
                </div>
            </div>
            <div class="user-flags">
                ${channel.flags.map(flag => `<span class="flag">${flag}</span>`).join('')}
            </div>
        </div>
    `;
}

// Render all channels
function renderChannels(channels) {
    channelsGrid.innerHTML = channels.map((channel, index) => renderChannelCard(channel, index)).join('');
}

// Filter and sort channels
function updateChannelsList() {
    let filteredChannels = [...channelData];
    
    // Apply filters
    const filterValue = filterSelect.value;
    if (filterValue !== 'all') {
        const risk = filterValue.split('-')[0]; // 'high-risk' -> 'high'
        filteredChannels = filteredChannels.filter(channel => channel.riskLevel === risk);
    }
    
    // Apply search
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredChannels = filteredChannels.filter(channel => 
            channel.name.toLowerCase().includes(searchTerm) ||
            channel.link.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sorting
    const sortValue = sortSelect.value;
    filteredChannels.sort((a, b) => {
        switch(sortValue) {
            case 'members':
                return b.members - a.members;
            case 'activity':
                return b.messagesPerDay - a.messagesPerDay;
            case 'risk':
                const riskOrder = { high: 3, medium: 2, low: 1 };
                return riskOrder[b.riskLevel] - riskOrder[a.riskLevel];
            default:
                return 0;
        }
    });
    
    renderChannels(filteredChannels);
}

// Event Listeners
sortSelect.addEventListener('change', updateChannelsList);
filterSelect.addEventListener('change', updateChannelsList);
searchInput.addEventListener('input', updateChannelsList);

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
    updateChannelsList();
}

scanButton.addEventListener('click', simulateScan);

// Initialize the page
document.addEventListener('DOMContentLoaded', updateChannelsList);