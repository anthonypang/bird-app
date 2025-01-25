import Post from "@/app/components/Post/Post";
import React from "react";
import { posts } from "@/app/lib/posts";
import Comments from "./components/Comments/Comments";
import Header from "@/app/components/Header/Header";

type PageProps = {
  params: Promise<{
    postId: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { postId } = await params;
  const post = posts.find((post) => post.id === Number(postId));

  return (
    <div>
      {post && (
        <>
          <Header>Post</Header>
          <Post post={post} isExpanded />
          <Comments comments={posts} />
        </>
      )}
    </div>
  );
};

export default page;
