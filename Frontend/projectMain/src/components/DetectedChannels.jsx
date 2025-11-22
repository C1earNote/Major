import React from "react";

export default function DetectedChannels({ channels = [] }) {
  const demoChannels = [
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
      id: "chan-004",
      name: "Drug Market (demo)",
      link: "https://t.me/drug_market_demo",
      messagesLast24h: 87,
      riskScore: 98,
    },
  ];

  const list = channels && channels.length > 0 ? channels : demoChannels;

  return (
    <div className="panel">
      <h2>Detected Channels</h2>
      <ul className="channel-list">
        {list.map((c) => {
          const riskClass = c.riskScore >= 85 ? "high" : c.riskScore >= 55 ? "med" : "low";
          return (
            <li key={c.id} className="channel-item">
              <div className="channel-main">
                <div className="channel-name">{c.name}</div>
                <div className="channel-link">{c.link}</div>
              </div>
              <div className="channel-meta">
                <span>{c.messagesLast24h} msgs / 24h</span>
                <span className="risk">Risk: <span className="risk-badge" data-risk={riskClass}>{c.riskScore}%</span></span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
