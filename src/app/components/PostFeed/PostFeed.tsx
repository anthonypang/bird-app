import React from "react";
import Post from "../Post/Post";
import { posts } from "@/app/lib/posts";

const PostFeed = () => {
  return posts.map((post) => <Post key={post.id} post={post} />);
};

export default PostFeed;
