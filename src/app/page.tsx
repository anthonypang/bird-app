export default function Home() {
  return (
    <div>
      {/* Tabs Component */}
      <div className="flex gap-4">
        <button>For You</button>
        <button>Following</button>
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
