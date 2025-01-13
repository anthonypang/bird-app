import React from "react";
import ProfileCard, { User } from "@/app/components/ProfileCard/ProfileCard";

const suggestions: User[] = [
  {
    id: 1,
    name: "Jane Cooper",
    userName: "@janec",
    avatar: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: 2,
    name: "Pang Cooper",
    userName: "@pangatron",
    avatar: "https://i.pravatar.cc/300?img=4",
  },
  {
    id: 3,
    name: "Thom Cooper",
    userName: "@tman123",
    avatar: "https://i.pravatar.cc/300?img=3",
  },
];

const FriendSuggestions = () => {
  return (
    <div className="mt-6 card">
      <h3 className="text-xl p-3 font-bold text-white">Who to follow</h3>
      {suggestions.map((user) => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default FriendSuggestions;
