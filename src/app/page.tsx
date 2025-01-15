import CreatePost from "./components/CreatePost/CreatePost";
import PostFeed from "./components/PostFeed/PostFeed";

export default function Home() {
  return (
    <div className="w-full">
      {/* Tabs Component */}
      <div className="flex">
        <button className="tab">For You</button>
        <button className="tab">Following</button>
      </div>
      {/* Create Post Component */}
      <CreatePost />
      {/* Feed Component */}
      <PostFeed />
    </div>
  );
}
