import Link from "next/link";
import React from "react";
import Avatar from "../Avatar/Avatar";

export type User = {
  id: number;
  name: string;
  userName: string;
  bio?: string;
  avatar?: string;
};

type ProfileCardProps = {
  user: User;
  isCurrentUser?: boolean;
};

const ProfileCard = ({ user, isCurrentUser }: ProfileCardProps) => {
  return (
    <Link
      href={""}
      key={user.id}
      className={`flex items-center justify-between hover:bg-gray-900 ${
        isCurrentUser && "hover:navHover"
      } p-3`}
    >
      <div className="flex gap-2">
        <Avatar user={user} />
        <div className={isCurrentUser ? "hidden lg:block" : "block"}>
          <div className="text-sm text-white font-bold ">{user.name}</div>
          <div className="text-sm text-gray-400 ">{user.userName}</div>
        </div>
      </div>
      {!isCurrentUser ? (
        <button className="font-bold bg-white text-black rounded-3xl block w-full lg:w-20 py-1.5 text-sm">
          Follow
        </button>
      ) : (
        <button className="hidden lg:block">...</button>
      )}
    </Link>
  );
};

export default ProfileCard;
