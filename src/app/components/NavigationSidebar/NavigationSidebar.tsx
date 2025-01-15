"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import ProfileCard from "../ProfileCard/ProfileCard";

const currentUser = {
  id: 1,
  name: "John Doe",
  userName: "johndoe",
  avatar: "https://i.pravatar.cc/300?img=2",
};

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
  {
    icon: "🙂",
    name: "Profile",
    href: "/" + currentUser.userName,
  },
];

const NavigationSidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="h-screen flex flex-col max-w-xs px-3 lg:px-10 mt-2">
      {navItems.map((item, key) => (
        <Link
          className={`text-xl hover:navHover p-4 lg:pr-6 w-max ${
            pathname === item.href && item.name ? "activeNav" : ""
          }`}
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
        <button className="roundedButton bg-white text-black rounded-full lg:rounded-3xl lg:w-56 w-full">
          <div className="hidden lg:block">Post</div>
          <div className="block lg:hidden">🚩</div>
        </button>
      </div>
      <div className="mt-auto mb-5">
        <ProfileCard user={currentUser} isCurrentUser />
      </div>
    </div>
  );
};

export default NavigationSidebar;
