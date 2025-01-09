import React from "react";
import TopicSuggestions from "./components/TopicSuggestions/TopicSuggestions";
import FriendSuggestions from "./components/FriendSuggestions/FriendSuggestions";
import Search from "../Search/Search";

const ExploreSidebar = () => {
  return (
    <div className="hidden xl:block px-4 max-w-sm w-full">
      {/* Search Box */}
      <Search />
      {/* Topic Suggestions */}
      <TopicSuggestions />
      {/* Friend Suggestions */}
      <FriendSuggestions />
    </div>
  );
};

export default ExploreSidebar;
