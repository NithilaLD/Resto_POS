import React from "react";
import { useNavigate } from "react-router-dom";

function BlueButton({ label,nav }) {
  const navigate = useNavigate();
  return (
    <button
      className="bg-blue-bg-color"
      onClick={() => {
        if (nav) {
          navigate(nav);
        }

        console.log("click");
      }}
      style={{
        padding: "10px 20px",
        margin: "10px 5px",
        borderRadius: "12px",
      }}
    >
      {label}
    </button>
  );
}

export default BlueButton;
