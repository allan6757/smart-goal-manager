import React from "react";
function ProgressBar({ value, max }) {
  const percent = Math.min(100, (value / max) * 100);
  return (
    <div style={{background: "#eee", width: "100%", height: "20px", borderRadius: "4px"}}>
      <div style={{
        width: percent + "%",
        background: "#3b82f6",
        height: "100%",
        borderRadius: "4px",
        transition: "width 0.3s"
      }} />
    </div>
  );
}
export default ProgressBar;