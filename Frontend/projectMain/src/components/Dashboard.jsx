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
      </div>

      <div className="stats-grid">
        <div className="stat-box purple">
          Channels Monitored: <b>{mockDetectedChannels.length + 21}</b>
        </div>
        <div className="stat-box red">Suspicious Detected: <b>9</b></div>
        <div className="stat-box blue">Active Investigations: <b>3</b></div>
        <div className="stat-box green">Successful Takedowns: <b>6</b></div>
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
              <button onClick={handleFetchMessages}>Analyze</button>
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
