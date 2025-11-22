import React from "react";

export default function SuspiciousUsers({ users = [] }) {
  const demoUsers = [
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

  const list = users && users.length > 0 ? users : demoUsers;

  return (
    <div className="panel">
      <h2>Suspicious Users</h2>
      <ul className="user-list">
        {list.map((u) => {
          const riskClass = u.risk >= 85 ? "high" : u.risk >= 55 ? "med" : "low";
          return (
            <li key={u.id} className="user-item">
              <div className="user-left">
                <div className="user-name">{u.name}</div>
                <div className="muted">{u.username} • {u.phone}</div>
              </div>
              <div className="user-right">
                <div className="risk-badge" data-risk={riskClass}>{u.risk}%</div>
              </div>
              <div className="user-flags">{(u.flags || []).join(" · ")}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
