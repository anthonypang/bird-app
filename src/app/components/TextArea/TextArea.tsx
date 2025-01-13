"use client";
import React from "react";

type TextAreaProps = {
  placeholder?: string;
};

const TextArea = ({ placeholder }: TextAreaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full bg-inherit text-xl min-h-10"
      rows={1}
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = "auto";
        target.style.height = `${target.scrollHeight}px`;
      }}
    />
  );
};

export default TextArea;
