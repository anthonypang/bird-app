import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import Avatar from "../Avatar/Avatar";
import TextArea from "../TextArea/TextArea";

const currentUser = {
  id: 1,
  name: "John Doe",
  userName: "johndoe",
  avatar: "https://i.pravatar.cc/300?img=2",
};

const CreatePost = () => {
  const AudienceAnchor = (
    <div className="rounded-full border border-gray-500 px-3 font-bold text-twitterColor text-sm">
      <span>Everyone</span>
    </div>
  );
  const ReplyAnchor = (
    <div className="font-bold text-twitterColor text-sm">
      <span>Everyone can reply</span>
    </div>
  );
  return (
    <div className="flex border-b border-outlineColor pt-4 pb-1">
      <Avatar className="ml-4" user={currentUser} />
      <div className="w-full ml-4 mr-5">
        {/* Audience dropdown */}
        <Dropdown anchor={AudienceAnchor} className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          assumenda dolore fugit quam maiores doloremque autem laudantium
          asperiores, saepe qui aspernatur doloribus aut, ab ipsum voluptatum
          deserunt, delectus explicabo praesentium?
        </Dropdown>
        {/* Text */}
        <TextArea placeholder="What is happening?!" />
        {/* Who can reply dropdown*/}
        <Dropdown
          anchor={ReplyAnchor}
          className="pb-3 w-full border-b border-outlineColor"
        >
          Lorem
        </Dropdown>
        {/* Post Footer */}
        <div className="flex items-center justify-between py-3">
          {/* Post Actions */}
          <div className="flex items-center gap-4">
            <button>📷</button>
            <button>🎥</button>
            <button>🎤</button>
            <button>🏙️</button>
          </div>
          <button className="roundedButton bg-white text-black w-20 p-2">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
