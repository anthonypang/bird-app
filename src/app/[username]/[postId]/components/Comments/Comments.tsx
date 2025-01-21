import React from "react";
import { Post as PostType } from "@/app/lib/posts";
import Post from "@/app/components/Post/Post";

type CommentsProps = {
  comments: PostType[];
};

const Comments = ({ comments }: CommentsProps) => {
  return comments.map((comment) => <Post key={comment.id} post={comment} />);
};

export default Comments;
