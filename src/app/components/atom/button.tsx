"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "dark" | "light";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "dark",
}) => {
  const baseClasses =
    "capitalize px-3 py-3 rounded-sm transition-colors duration-200";

  const variantClasses =
    variant === "dark"
      ? "bg-gray-800 text-white hover:bg-gray-400 hover:text-gray-800"
      : "bg-white text-black border border-gray-300 hover:bg-gray-100";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
