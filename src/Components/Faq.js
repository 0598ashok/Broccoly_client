import React, { useState } from "react";
import "../css/Faq.css";
import General from "./Faq/General";
import Delivery from "./Faq/Delivery";
import BMI from "./Faq/BMI";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // Initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{backgroundColor:"#fff"}}>
      <div className="container tabs_container">
        <div className="tab_header">
          <div
            className={`tab_item ${activeTab === "tab1" && "active"}`}
            onClick={() => handleTabClick("tab1")}
          >
            General
          </div>
          <div
            className={`tab_item ${activeTab === "tab2" && "active"}`}
            onClick={() => handleTabClick("tab2")}
          >
            Delivery
          </div>
          <div
            className={`tab_item ${activeTab === "tab3" && "active"}`}
            onClick={() => handleTabClick("tab3")}
          >
            BMI
          </div>
        </div>
        <div className="tab_content">
          {activeTab === "tab1" && <p><General/></p>}
          {activeTab === "tab2" && <p><Delivery/></p>}
          {activeTab === "tab3" && <p><BMI/></p>}
        </div>
      </div>
    </div>
  );
};

export default Faq;
