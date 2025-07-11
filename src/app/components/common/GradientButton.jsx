"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const GradientButton = ({ 
  text, 
  textColor, 
  width, 
  fontSize, 
  fontWeight, 
  padding, 
  onClick, 
  icon 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? "black" : "transparent",
        backgroundImage: isHovered
          ? "none"
          : "linear-gradient(to right, #CB9F3C, #E9DC8A, #CBB260)",
        color: isHovered ? "white" : textColor,
        width: width,
        padding: padding,
        fontSize: fontSize,
        fontWeight: fontWeight,
        borderWidth: 1,
        borderColor: "#DCC268",
        borderRadius: "100px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        {text}
        {icon && (
          <FaArrowRight 
            style={{
              marginLeft: "8px",
              color: isHovered ? "white" : "inherit",
            }} 
          />
        )}
      </span>
    </button>
  );
};

export default GradientButton;



