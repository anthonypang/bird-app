import CreatePost from "./components/CreatePost/CreatePost";
import Header from "./components/Header/Header";
import PostFeed from "./components/PostFeed/PostFeed";
import Tabs from "./components/Tabs/Tabs";

export default function Home() {
  const tabs = [
    { label: "For You", value: "for-you" },
    { label: "Following", value: "following" },
  ];

  return (
    <div className="w-full">
      <Header hideBackButton>
        <Tabs tabs={tabs} defaultTab="for-you" />
      </Header>
      <CreatePost />
      <PostFeed />
    </div>
  );
}
