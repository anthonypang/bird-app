import React from "react";

type PageProps = {
  params: Promise<{
    username: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { username } = await params;
  return <div>{username}</div>;
};

export default page;
