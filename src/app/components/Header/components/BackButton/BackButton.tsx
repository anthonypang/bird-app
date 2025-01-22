"use client";

import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const onBackButtonClick = () => {
    router.back();
  };
  return <button onClick={onBackButtonClick}>⬅️</button>;
};

export default BackButton;
