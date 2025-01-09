import React from "react";
import { Topic as TopicType } from "../TopicSuggestions";
import Link from "next/link";

type TopicProps = {
  topic: TopicType;
};

const Topic = ({ topic }: TopicProps) => {
  return (
    <Link
      href={topic.url}
      key={topic.name}
      className="block hover:bg-gray-900 p-3"
    >
      <div className="text-xs text-gray-400">Trending</div>
      <div className="text-sm text-white font-bold ">{topic.name}</div>
    </Link>
  );
};

export default Topic;
