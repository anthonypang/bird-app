import Image from "next/image";
import Link from "next/link";
import React from "react";

export type User = {
  id: number;
  name: string;
  userName: string;
  bio?: string;
  avatar?: string;
};

type ProfileCardProps = {
  user: User;
};

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <Link
      href={""}
      key={user.id}
      className="flex items-center justify-between hover:bg-gray-900 p-3"
    >
      <div className="flex gap-1">
        <Image
          src={user.avatar || "https://i.pravatar.cc/300"}
          width={40}
          height={40}
          alt={user.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="text-sm text-white font-bold ">{user.name}</div>
          <div className="text-sm text-gray-400 ">{user.userName}</div>
        </div>
      </div>
      <button className="font-bold bg-white text-black rounded-3xl block w-full lg:w-20 py-1.5 text-sm">
        Follow
      </button>
    </Link>
  );
};

export default ProfileCard;
