import React from "react";
import Avatar from "../Avatar/Avatar";

export type Post = {
  id: number;
  content: string;
  user: {
    id: number;
    name: string;
    userName: string;
    avatar: string;
  };
};

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  return (
    <div className="post">
      <Avatar user={post.user} />
      <div className="w-full ml-3 mr-3">
        <div className="flex gap-1">
          <span className="font-bold">{post.user.name}</span>
          <span className="text-gray-500">{post.user.userName}</span>
        </div>
        <div>{post.content}</div>
        {/* reactions */}
        <div className="flex justify-between mt-3">
          <button>💬</button>
          <button>🔁</button>
          <button>♥️</button>
          <button>🔖</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
