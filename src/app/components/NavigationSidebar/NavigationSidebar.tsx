import Link from "next/link";
import React from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/explore",
  },
];

const NavigationSidebar = () => {
  return (
    <div className="h-screen  flex flex-col">
      {navItems.map((item, key) => (
        <Link key={key} href={item.href}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationSidebar;
