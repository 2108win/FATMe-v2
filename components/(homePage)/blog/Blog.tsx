"use client";

import HeadingText from "@/components/HeadingText";
import React from "react";

import ReferencesBlog from "@/components/ReferencesBlog";

const Blog = () => {
  return (
    <div className="container flex flex-col gap-10">
      <HeadingText
        className="items-center text-center"
        smallTitle="Tin tức"
        bigTitle="Các Blog mới nhất từ FatMe"
        description="Tin tức mới nhất về FatMe"
      />
      <ReferencesBlog />
    </div>
  );
};

export default Blog;
