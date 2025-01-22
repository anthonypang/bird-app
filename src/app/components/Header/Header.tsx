import React from "react";
import BackButton from "./components/BackButton/BackButton";
type HeaderProps = {
  children: React.ReactNode;
  hideBackButton?: boolean;
};

const Header = ({ children, hideBackButton = false }: HeaderProps) => {
  return (
    <div className="flex sticky top-0 z-10 bg-black w-full ">
      {/* back button */}
      {!hideBackButton && <BackButton />}
      {children}
    </div>
  );
};

export default Header;
