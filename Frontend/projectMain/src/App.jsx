import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import DetectedChannels from "./components/DetectedChannels";
import SuspiciousUsers from "./components/SuspiciousUsers";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content-area">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "detected" && <DetectedChannels />}
        {activeTab === "suspicious" && <SuspiciousUsers />}
      </div>
    </div>
  );
}

export default App;
