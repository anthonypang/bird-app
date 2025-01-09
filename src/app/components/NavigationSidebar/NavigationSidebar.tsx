import Link from "next/link";
import React from "react";

const navItems = [
  {
    icon: "🐦",
    href: "/",
  },
  {
    icon: "🏠",
    name: "Home",
    href: "/",
  },
  {
    icon: "🔍",
    name: "Explore",
    href: "/explore",
  },
];

const NavigationSidebar = () => {
  return (
    <div className="h-screen  flex flex-col">
      {navItems.map((item, key) => (
        <Link
          className="text-gray-600 hover:text-blue-500 py-2 px-4"
          key={key}
          href={item.href}
        >
          <div className="flex items-center gap-4">
            <span>{item.icon}</span>
            <span className="hidden lg:block">{item?.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavigationSidebar;
