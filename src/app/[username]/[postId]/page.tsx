import Post from "@/app/components/Post/Post";
import React from "react";
import { posts } from "@/app/lib/posts";
import Comments from "./components/Comments/Comments";

const page = async ({ params }: { params: { postId: string } }) => {
  const { postId } = await params;
  const post = posts.find((post) => post.id === Number(postId));

  return (
    <div>
      {post && (
        <>
          <Post post={post} isExpanded />
          <Comments comments={posts} />
        </>
      )}
    </div>
  );
};

export default page;
