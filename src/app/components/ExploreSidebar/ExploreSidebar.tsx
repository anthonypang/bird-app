import React from "react";

const ExploreSidebar = () => {
  return (
    <div className="hidden lg:block">
      {/* Search Box */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
        />
      </div>
      {/* Topic Suggestions */}
      <div className="mt-6">
        <h3 className="text-sm font-bold text-gray-600">
          What&apos;s happening
        </h3>
      </div>
      {/* Friend Suggestions */}
      <div className="mt-6">
        <h3 className="text-sm font-bold text-gray-600">Who to follow</h3>
      </div>
    </div>
  );
};

export default ExploreSidebar;
