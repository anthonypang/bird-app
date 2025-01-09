import React from "react";
import Topic from "./components/Topic";

export type Topic = {
  id: number;
  name: string;
  url: string;
};

const topics = [
  { id: 1, name: "JavaScript", url: "#" },
  { id: 2, name: "React", url: "#" },
  { id: 3, name: "Next.js", url: "#" },
];

const TopicSuggestions = () => {
  return (
    <div className="mt-6 card">
      <h3 className="text-xl p-3 font-bold text-white">
        What&apos;s happening
      </h3>
      <div>
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default TopicSuggestions;
