import React from "react";
import Avatar from "../Avatar/Avatar";
import Link from "next/link";
import { Post as PostType } from "@/app/lib/posts";

type PostProps = {
  post: PostType;
  isExpanded?: boolean;
};

const Post = ({ post, isExpanded }: PostProps) => {
  const content = (
    <>
      <Avatar user={post.user} />
      <div className={`w-full ${isExpanded ? "" : "ml-3 mr-3"}`}>
        <div className={`${isExpanded ? "block" : "flex gap-1"} `}>
          <div className="font-bold">{post.user.name}</div>
          <div className="text-gray-500">@{post.user.userName}</div>
        </div>
        <div className={`${isExpanded ? "py-3" : ""}`}>{post.content}</div>
        {isExpanded && (
          <div className="text-gray-500 text-sm">3:46 PM · Jan 20, 2025</div>
        )}
        {/* reactions */}
        <div
          className={`flex justify-between mt-3 ${
            isExpanded ? "border-t border-b border-outlineColor p-2" : ""
          }`}
        >
          <button>💬</button>
          <button>🔁</button>
          <button>♥️</button>
          <button>🔖</button>
        </div>
      </div>
    </>
  );

  return (
    <div className="postContainer">
      {isExpanded ? (
        <div className="post block hover:bg-transparent cursor-auto">
          {content}
          <div>Post your reply</div>
        </div>
      ) : (
        <Link className="post" href={`/${post.user.userName}/${post.id}`}>
          {content}
        </Link>
      )}
    </div>
  );
};

export default Post;
