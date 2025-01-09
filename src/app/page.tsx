export default function Home() {
  return (
    <div className="w-full">
      {/* Tabs Component */}
      <div className="flex">
        <button className="tab">For You</button>
        <button className="tab">Following</button>
      </div>
      {/* Create Post Component */}
      <div>
        <button>Create Post</button>
      </div>
      {/* Feed Component */}
      <div>
        <div>Post 1</div>
        <div>Post 2</div>
        <div>Post 3</div>
      </div>
    </div>
  );
}
