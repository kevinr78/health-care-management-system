import React from "react";
import BrandIcon from "../../assets/BrandIcon";

export default function Sidebar() {
  return (
    <aside>
      <div className="brand">
        <div className="brand-logo">
          <img src={BrandIcon} alt="App Icon" srcset="" />
        </div>
        <div className="brand-title">HMS</div>
      </div>
    </aside>
  );
}
