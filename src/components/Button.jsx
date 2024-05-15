import React from "react";

function BlueButton({ label }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        margin: "10px 5px",
        background: "blue",
        borderRadius: "12px",
      }}
    >
      {label}
    </button>
  );
}

export default BlueButton;
