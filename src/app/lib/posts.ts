export type Post = {
  id: number;
  content: string;
  user: {
    id: number;
    name: string;
    userName: string;
    avatar: string;
  };
};

export const posts: Post[] = [
  {
    id: 1,
    content: "This is a post.",
    user: {
      id: 1,
      name: "John Doe",
      userName: "john_doe",
      avatar: "https://i.pravatar.cc/100",
    },
  },
  {
    id: 2,
    content:
      "Here's another post! It's a bit longer to show that we can vary content length. I hope you enjoy reading it!",
    user: {
      id: 2,
      name: "Jane Smith",
      userName: "jane_smith",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
  },
  {
    id: 3,
    content: "Loving the weather today 🌞",
    user: {
      id: 3,
      name: "Alex Johnson",
      userName: "alex_johnson",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  },
  {
    id: 4,
    content:
      "Just finished a great workout 💪. Feeling pumped and ready to take on the day! Strength training is my favorite way to relieve stress and stay healthy. Anyone else love lifting weights?",
    user: {
      id: 4,
      name: "Chris Lee",
      userName: "chris_lee",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
  },
  {
    id: 5,
    content: "Weekend vibes! 🎉",
    user: {
      id: 5,
      name: "Taylor Brown",
      userName: "taylor_brown",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
  },
  {
    id: 6,
    content:
      "Check out my latest blog post! I cover everything you need to know about starting your own business, from finding your niche to marketing your products. It's a long read, but I promise it's packed with valuable tips and insights that can help you succeed.",
    user: {
      id: 6,
      name: "Morgan Davis",
      userName: "morgan_davis",
      avatar: "https://i.pravatar.cc/100?img=6",
    },
  },
  {
    id: 7,
    content: "Coffee ☕.",
    user: {
      id: 7,
      name: "Jordan Wilson",
      userName: "jordan_wilson",
      avatar: "https://i.pravatar.cc/100?img=7",
    },
  },
  {
    id: 8,
    content:
      "Just booked a trip to the mountains 🏔️. I've been dreaming of this for so long! Fresh air, stunning views, and plenty of hiking trails to explore. Can't wait to disconnect and recharge for a few days.",
    user: {
      id: 8,
      name: "Riley Martinez",
      userName: "riley_martinez",
      avatar: "https://i.pravatar.cc/100?img=8",
    },
  },
  {
    id: 9,
    content: "Learning to cook. 🍳",
    user: {
      id: 9,
      name: "Casey White",
      userName: "casey_white",
      avatar: "https://i.pravatar.cc/100?img=9",
    },
  },
  {
    id: 10,
    content:
      "Got a promotion at work! 🎉 I'm beyond excited to start this new chapter in my career. Hard work pays off, and I'm grateful for all the support I've received along the way. Time to celebrate!",
    user: {
      id: 10,
      name: "Jamie Carter",
      userName: "jamie_carter",
      avatar: "https://i.pravatar.cc/100?img=10",
    },
  },
  // Add more posts as needed
];
