"use client";

import { useState } from "react";

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (value: string) => void;
}

export default function Tabs({ tabs, defaultTab, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].value);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    onTabChange?.(value);
  };

  return (
    <div className="sticky top-0 z-10 bg-black w-full border-b border-gray-800">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={`tab
              ${activeTab === tab.value ? "activeTab" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
