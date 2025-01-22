import React from "react";
import Avatar from "../Avatar/Avatar";
import Link from "next/link";
import { Post as PostType } from "@/app/lib/posts";
import Dropdown from "../Dropdown/Dropdown";
import TextArea from "../TextArea/TextArea";

type PostProps = {
  post: PostType;
  isExpanded?: boolean;
};

const Post = ({ post, isExpanded }: PostProps) => {
  const MoreAnchor = <div>⌥</div>;
  const content = (
    <>
      {!isExpanded ? <Avatar user={post.user} /> : null}
      <div className={`w-full ${isExpanded ? "" : "ml-3 mr-2"}`}>
        <div className={isExpanded ? "flex gap-2" : ""}>
          {isExpanded ? <Avatar user={post.user} /> : null}
          <div className={`${isExpanded ? "block" : "flex gap-1"} `}>
            <div className="font-bold">{post.user.name}</div>
            <div className="text-gray-500">@{post.user.userName}</div>
          </div>
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
          <Dropdown anchor={MoreAnchor}>
            <div>More</div>
          </Dropdown>
        </div>
      </div>
    </>
  );

  return (
    <div className="postContainer">
      {isExpanded ? (
        <div className="post block hover:bg-transparent hover:cursor-auto">
          {content}
          <TextArea placeholder="Post your reply" />
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
