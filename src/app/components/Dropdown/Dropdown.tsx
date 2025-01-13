"use client";
import React, { useState } from "react";

type DropdownProps = {
  anchor: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const Dropdown = ({ anchor, children, className }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button onClick={toggleDropdown}>{anchor}</button>
      {isDropdownOpen && (
        <div className="origin-top-right absolute mt-2 w-56 rounded-md bg-black z-50 shadow-lg border border-gray-700 p-3">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
