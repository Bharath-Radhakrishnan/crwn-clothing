import React from "react";
import "./menu-item.scss";
function MenuItem({ title, img, size }) {
  return (
    <div
      className={`menu-item ${size}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
