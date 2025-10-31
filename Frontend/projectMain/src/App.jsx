import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DetectedChannels from "./components/DetectedChannels";
import SuspiciousUsers from "./components/SuspiciousUsers";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "dashboard" && <Dashboard />}
      {activeTab === "detected" && (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-semibold text-white mb-1">Channel Monitoring</h1>
          <p className="text-sm text-gray-400 mb-8">Comprehensive view of all monitored channels</p>
          <DetectedChannels isFullPage={true} />
        </div>
      )}
      {activeTab === "suspicious" && (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-semibold text-white mb-1">User Investigation</h1>
          <p className="text-sm text-gray-400 mb-8">Detailed analysis of flagged user accounts</p>
          <SuspiciousUsers isFullPage={true} />
        </div>
      )}
    </div>
  );
}
