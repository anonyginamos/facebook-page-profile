import React from "react";
import "../styles/Tabs.css";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Posts", "About", "Friends", "Photos", "Videos", "More"];

  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? "active-tab" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
