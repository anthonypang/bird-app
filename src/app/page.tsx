import CreatePost from "./components/CreatePost/CreatePost";
import PostFeed from "./components/PostFeed/PostFeed";
import Tabs from "./components/Tabs/Tabs";

export default function Home() {
  const tabs = [
    { label: "For You", value: "for-you" },
    { label: "Following", value: "following" },
  ];

  return (
    <div className="w-full">
      <Tabs tabs={tabs} defaultTab="for-you" />
      <CreatePost />
      <PostFeed />
    </div>
  );
}
