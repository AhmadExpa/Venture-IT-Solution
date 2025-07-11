"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const CustomButton = ({
  text,
  bgColor,
  textColor,
  width,
  fontSize,
  fontWeight,
  padding,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const hoverTextColor = pathname === "/" ? "white" : "black";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: bgColor,
        color: isHovered ? hoverTextColor : textColor,
        width: width,
        padding: padding,
        fontSize: fontSize,
        fontWeight: fontWeight,
        borderWidth: 1,
        borderColor: "#DCC268",
        borderRadius: "100px",
        cursor: "pointer",
        transition: "color 0.3s ease-in-out",
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
