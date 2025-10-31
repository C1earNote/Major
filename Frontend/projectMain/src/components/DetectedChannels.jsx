import React from "react";

export default function DetectedChannels({ channels = [] }) {
  return (
    <div className="panel">
      <h2>Detected Channels</h2>
      {channels.length === 0 ? (
        <div className="placeholder-page">
          <p>No detected channels to show.</p>
        </div>
      ) : (
        <ul className="channel-list">
          {channels.map((c) => (
            <li key={c.id} className="channel-item">
              <div className="channel-main">
                <div className="channel-name">{c.name}</div>
                <div className="channel-link">{c.link}</div>
              </div>
              <div className="channel-meta">
                <span>{c.messagesLast24h} msgs / 24h</span>
                <span className="risk">Risk: {c.riskScore}%</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
