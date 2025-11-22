// Mock data for demonstration
const mockData = {
    channels: [
        { name: 'CryptoScams Alert', link: 't.me/cryptoscams', members: '12.5K', messages: '458' },
        { name: 'FakeTrading Signals', link: 't.me/faketrading', members: '8.2K', messages: '223' },
        { name: 'Pump&Dump Group', link: 't.me/pumpdump', members: '15.1K', messages: '892' },
        { name: 'ScamPromoters', link: 't.me/scampromo', members: '5.4K', messages: '167' }
    ],
    users: [
        { name: 'CryptoScammer123', flags: ['Multiple Reported Scams', 'Fake Giveaways'], risk: 'high' },
        { name: 'TradingGuru_XX', flags: ['Suspicious Links', 'New Account'], risk: 'med' },
        { name: 'Whale_Signals', flags: ['Pump & Dump History', 'Bot Activity'], risk: 'high' },
        { name: 'Crypto_Master', flags: ['Misleading Info', 'Spam Activity'], risk: 'med' }
    ],
    messages: [
        { user: 'CryptoScammer123', text: '🚨 URGENT: Don\'t miss this 1000x gem! Send BTC now to participate! Limited time only! 🚀', time: '2m ago' },
        { user: 'TradingGuru_XX', text: 'Exclusive signals group! 100% accurate predictions! Join now with small fee! 📈', time: '5m ago' },
        { user: 'Whale_Signals', text: 'Big pump coming! Buy now before it\'s too late! 🐋', time: '8m ago' }
    ]
};

// DOM Elements
const scanButton = document.querySelector('.scan-button');
const statusDot = document.querySelector('.status-dot');
const statsNumbers = document.querySelectorAll('.stat-number');
const channelList = document.querySelector('.channel-list');
const userList = document.querySelector('.user-list');
const messagesContainer = document.querySelector('.messages-container');

// Initialize stats with animation
function animateNumber(element, target) {
    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;
    
    const interval = setInterval(() => {
        current += stepValue;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, duration / steps);
}

// Initialize stats
function initializeStats() {
    const stats = {
        channels: 28,
        messages: 1734,
        users: 156
    };
    
    statsNumbers.forEach((stat, index) => {
        const value = Object.values(stats)[index];
        animateNumber(stat, value);
    });
}

// Render channels
function renderChannels() {
    channelList.innerHTML = mockData.channels.map(channel => `
        <li class="channel-item">
            <div class="channel-main">
                <span class="channel-name">${channel.name}</span>
                <a href="https://${channel.link}" class="channel-link" target="_blank">${channel.link}</a>
                <div class="channel-meta">
                    <span>${channel.members} members</span>
                    <span>${channel.messages} messages/day</span>
                </div>
            </div>
        </li>
    `).join('');
}

// Render users
function renderUsers() {
    userList.innerHTML = mockData.users.map(user => `
        <li class="user-item">
            <div class="risk-badge" data-risk="${user.risk}">${user.risk.toUpperCase()}</div>
            <div class="user-name">${user.name}</div>
            <div class="user-flags">
                ${user.flags.map(flag => `<div>${flag}</div>`).join('')}
            </div>
        </li>
    `).join('');
}

// Fetch and parse messages from messages.txt
async function fetchMessages() {
    try {
        const response = await fetch('messages.txt');
        const text = await response.text();
        
        // Split by delimiter
        const messages = text.split('--------------------------------------------------')
            .filter(block => block.trim()) // Remove empty blocks
            .map(block => {
                const lines = block.trim().split('\n');
                const messageData = {};
                
                lines.forEach(line => {
                    if (line.includes(': ')) {
                        const [key, value] = line.split(': ');
                        messageData[key] = value;
                    }
                });

                // Parse the date to get relative time
                const messageDate = new Date(messageData.Date);
                const now = new Date();
                const diffMinutes = Math.floor((now - messageDate) / (1000 * 60));
                let timeAgo;
                
                if (diffMinutes < 60) {
                    timeAgo = `${diffMinutes}m ago`;
                } else if (diffMinutes < 1440) {
                    timeAgo = `${Math.floor(diffMinutes/60)}h ago`;
                } else {
                    timeAgo = `${Math.floor(diffMinutes/1440)}d ago`;
                }

                return {
                    name: messageData.Name,
                    username: messageData.Username,
                    message: messageData.Message,
                    time: timeAgo
                };
            });

        return messages;
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
}

// Render messages
async function renderMessages() {
    const messages = await fetchMessages();
    
    if (messages.length === 0) {
        messagesContainer.innerHTML = '<p class="no-messages">No messages found.</p>';
        return;
    }

    messagesContainer.innerHTML = messages.map(msg => `
        <div class="message-card">
            <div class="message-header">
                <span class="user-name">${msg.name}</span>
                ${msg.username !== 'N/A' ? `<span class="muted">@${msg.username}</span>` : ''}
                <span class="muted">• ${msg.time}</span>
            </div>
            <div class="message-text">${msg.message}</div>
        </div>
    `).join('');
}

// Simulate scanning process
function simulateScan() {
    return new Promise((resolve) => {
        statusDot.classList.add('scanning');
        scanButton.style.opacity = '0.7';
        scanButton.style.pointerEvents = 'none';
        
        setTimeout(() => {
            statusDot.classList.remove('scanning');
            statusDot.classList.add('success');
            scanButton.style.opacity = '1';
            scanButton.style.pointerEvents = 'auto';
            resolve();
        }, 3000);
    });
}

// Quick Scan button click handler
scanButton.addEventListener('click', async () => {
    await simulateScan();
    
    // Update data randomly
    mockData.channels.forEach(channel => {
        channel.messages = Math.floor(Math.random() * 1000).toString();
    });
    
    // Re-render with updated data
    renderChannels();
    renderUsers();
    renderMessages();
});

// Initialize the dashboard
async function initializeDashboard() {
    initializeStats();
    renderChannels();
    renderUsers();
    await renderMessages();  // Now async
    
    // Refresh messages every 30 seconds
    setInterval(async () => {
        await renderMessages();
    }, 30000);
}

// Handle Quick Actions Analyze button click
async function handleFetchMessages() {
    const groupLinkInput = document.querySelector('#group-link');
    const link = groupLinkInput.value.trim();
    
    if (!link) {
        alert('Please enter a group link');
        return;
    }

    try {
        // Show scanning state
        const scanButton = document.querySelector('.scan-button');
        const statusDot = document.querySelector('.status-dot');
        statusDot.classList.add('scanning');
        scanButton.style.opacity = '0.7';
        scanButton.style.pointerEvents = 'none';

        // Send link to server
        const response = await fetch('http://localhost:5000/save-link', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ link })
        });

        if (!response.ok) {
            throw new Error('Failed to save link');
        }

        // Clear the input
        groupLinkInput.value = '';
        
        // Show success state
        statusDot.classList.remove('scanning');
        statusDot.classList.add('success');
        scanButton.style.opacity = '1';
        scanButton.style.pointerEvents = 'auto';
        
        // Show success message
        alert('Link saved successfully! Analysis started.');
        
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to save link. Please ensure the server is running.');
        
        // Reset button state
        statusDot.classList.remove('scanning', 'success');
        scanButton.style.opacity = '1';
        scanButton.style.pointerEvents = 'auto';
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', initializeDashboard);

// Initialize all sections on page load
function initializeAllSections() {
    // Initialize channels
    if (typeof updateChannelsList === 'function') {
        updateChannelsList();
    }
    // Initialize users
    if (typeof updateUsersList === 'function') {
        updateUsersList();
    }
}

// Handle navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links and sections
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show corresponding section
        const targetId = link.getAttribute('data-tab');
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');

        // Re-initialize all sections when switching tabs
        initializeAllSections();
    });
});

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeDashboard();
    initializeAllSections();
});