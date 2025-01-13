import React from "react";
import Image from "next/image";
import { User } from "../ProfileCard/ProfileCard";

type AvatarProps = {
  user: User;
  height?: number;
  width?: number;
  className?: string;
};

const Avatar = ({ user, height = 40, width = 40, className }: AvatarProps) => {
  return (
    <div className={`w-${width} h-${height}`}>
      <Image
        src={user.avatar || "https://i.pravatar.cc/300"}
        height={height}
        width={width}
        alt={user.name}
        className={`rounded-full ${className}`}
      />
    </div>
  );
};

export default Avatar;
