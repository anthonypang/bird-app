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
    href: "#",
  },
  {
    icon: "🔔",
    name: "Notifications",
    href: "#",
  },
  {
    icon: "✉️",
    name: "Messages",
    href: "#",
  },
  {
    icon: "🙂",
    name: "Profile",
    href: "#",
  },
];

const NavigationSidebar = () => {
  return (
    <div className="h-screen flex flex-col max-w-xs px-3 lg:px-10 mt-2">
      {navItems.map((item, key) => (
        <Link
          className="text-xl hover:text-blue-500 p-4 w-max"
          key={key}
          href={item.href}
        >
          <div className="flex items-center gap-4">
            <span>{item.icon}</span>
            <span className="hidden lg:block">{item?.name}</span>
          </div>
        </Link>
      ))}
      <div className="mt-5 flex justify-center">
        <button className="font-bold bg-white text-black rounded-full lg:rounded-3xl block w-full lg:w-56 py-3">
          <div className="hidden lg:block">Post</div>
          <div className="block lg:hidden">🚩</div>
        </button>
      </div>
    </div>
  );
};

export default NavigationSidebar;
