import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import DetectedChannels from "./DetectedChannels";
import SuspiciousUsers from "./SuspiciousUsers";

export default function Dashboard() {
  const [groupLink, setGroupLink] = useState("");
  const [messages, setMessages] = useState([]);

  // Fake data used to demo the UI when backend isn't available.
  const mockDetectedChannels = [
    {
      id: "chan-001",
      name: "Crypto Alerts",
      link: "https://t.me/crypto_alerts",
      messagesLast24h: 123,
      riskScore: 78,
    },
    {
      id: "chan-002",
      name: "Giveaway World",
      link: "https://t.me/giveaway_world",
      messagesLast24h: 54,
      riskScore: 62,
    },
    {
      id: "chan-003",
      name: "Private Deals",
      link: "https://t.me/private_deals",
      messagesLast24h: 12,
      riskScore: 91,
    },
    {
      id: "chan-004",
      name: "Drug Market (demo)",
      link: "https://t.me/drug_market_demo",
      messagesLast24h: 87,
      riskScore: 98,
    },
    {
      id: "chan-005",
      name: "Scam Offers",
      link: "https://t.me/scam_offers",
      messagesLast24h: 230,
      riskScore: 95,
    },
    {
      id: "chan-006",
      name: "Airdrop Hunter",
      link: "https://t.me/airdrop_hunter",
      messagesLast24h: 34,
      riskScore: 45,
    },
  ];

  const mockSuspiciousUsers = [
    {
      id: "user-sneh",
      name: "Snehadip KIIT",
      username: "Deepsea_Bandit",
      phone: "918981935080",
      flags: ["frequent messaging", "repeated short messages"],
      risk: 65,
    },
    {
      id: "user-aiswarya",
      name: "Aiswarya Ayaskant",
      username: "N/A",
      phone: "Hidden/Unavailable",
      flags: ["hidden contact", "one-off message"],
      risk: 40,
    },
    {
      id: "user-tanishq",
      name: "Tanishq Mariz KIIT 🤒",
      username: "Txxxan",
      phone: "919460213635",
      flags: ["explicit illicit request", "high-risk content"],
      risk: 98,
    },
    {
      id: "user-unk1",
      name: "Unknown",
      username: "@unknown123",
      phone: "(not provided)",
      flags: ["recently created", "mass-invites"],
      risk: 90,
    },
    {
      id: "user-demo2",
      name: "Demo Bot",
      username: "@demo_bot_42",
      phone: "(hidden)",
      flags: ["bot-like patterns", "link spamming"],
      risk: 78,
    },
  ];

  // Small helper to seed messages for demo
  useEffect(() => {
    setMessages([
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-31 06:42:00+00:00",
          message: "byee byee",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-31 06:41:57+00:00",
          message: "heellooo",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-31 06:41:55+00:00",
          message: "jabifbosov",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-31 06:41:54+00:00",
          message: "ojbaofnl",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-31 06:41:53+00:00",
          message: "oabisfa",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-31 06:41:53+00:00",
          message: "kjnsdlfn",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-30 15:11:41+00:00",
          message: "hii",
        },
        {
          name: "Aiswarya Ayaskant",
          username: "N/A",
          phone: "Hidden/Unavailable",
          date: "2025-10-30 15:04:03+00:00",
          message: "r2seeerseyvuy",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-30 15:03:30+00:00",
          message: "he;lloooo",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-30 15:03:27+00:00",
          message: "bjjvkkk n,",
        },
        {
          name: "Tanishq Mariz KIIT 🤒",
          username: "Txxxan",
          phone: "919460213635",
          date: "2025-10-30 14:46:25+00:00",
          message: "I need some 👾",
        },
        {
          name: "Tanishq Mariz KIIT 🤒",
          username: "Txxxan",
          phone: "919460213635",
          date: "2025-10-30 14:46:02+00:00",
          message: "Please",
        },
        {
          name: "Tanishq Mariz KIIT 🤒",
          username: "Txxxan",
          phone: "919460213635",
          date: "2025-10-30 14:46:01+00:00",
          message: "Mujhe drugs dede bhai koi",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-30 14:45:27+00:00",
          message: "ojwhfojwohwoefw\\",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-30 14:45:26+00:00",
          message: "ohweofw",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-30 14:45:25+00:00",
          message: "ohefoijwapef",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-30 14:45:25+00:00",
          message: "oefowaef",
        },
        {
          name: "Snehadip KIIT",
          username: "Deepsea_Bandit",
          phone: "918981935080",
          date: "2025-10-30 14:45:24+00:00",
          message: "hwiehfow",
        },
      ]);
  }, []);

  const handleFetchMessages = async () => {
    
    try {
      await fetch("http://localhost:5000/api/add-group", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groupLink }),
      });
      const res = await fetch("http://localhost:5000/api/messages");
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard">
      <div className="header-row">
        <h1>Investigator Dashboard</h1>
        <button 
          className="scan-button" 
          onClick={() => {
            const btn = document.querySelector('.scan-button');
            const dot = document.querySelector('.status-dot');
            btn.classList.add('scanning');
            dot.classList.add('scanning');
            setTimeout(() => {
              btn.classList.remove('scanning');
              dot.classList.remove('scanning');
              dot.classList.add('success');
            }, 3000);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="scan-icon">
            <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
            <path fillRule="evenodd" d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd" />
          </svg>
          Quick Scan
          <div className="status-dot"></div>
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-box purple">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h8.25c1.035 0 1.875-.84 1.875-1.875V15z" />
              <path d="M8.277 18.462c-.244.244-.628.224-.86-.008a6 6 0 0 1 .008-8.492c.233-.232.616-.252.86-.008.244.244.244.64 0 .884a4.5 4.5 0 0 0-.008 6.74c.244.244.244.64 0 .884z" />
            </svg>
          </div>
          Channels Monitored
          <div className="stat-number">27</div>
        </div>
        <div className="stat-box red">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
            </svg>
          </div>
          Suspicious Detected
          <div className="stat-number">9</div>
        </div>
        <div className="stat-box green">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
              <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z" clipRule="evenodd" />
            </svg>
          </div>
          Active Investigations
          <div className="stat-number">3</div>
        </div>
      </div>

      <div className="cols">
        <section className="col left">
          <DetectedChannels channels={mockDetectedChannels} />

          <div className="panel small">
            <h3>Quick Actions</h3>
            <div className="input-row">
              <input
                type="text"
                placeholder="Enter Group Link"
                value={groupLink}
                onChange={(e) => setGroupLink(e.target.value)}
              />
              <button onClick={handleFetchMessages}>
                Analyze
              </button>
            </div>
          </div>
        </section>

        <section className="col right">
          <div className="panel">
            <h2>Latest Messages</h2>
            <div className="messages-container">
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div key={index} className="message-card">
                    <p>
                      <strong>{msg.name}</strong> <span className="muted">{msg.username}</span>
                    </p>
                    <p className="muted">{msg.date} • {msg.phone}</p>
                    <p className="message-text">{msg.message}</p>
                  </div>
                ))
              ) : (
                <p className="no-messages">No messages found.</p>
              )}
            </div>
          </div>

          <SuspiciousUsers users={mockSuspiciousUsers} />
        </section>
      </div>
    </div>
  );
}
