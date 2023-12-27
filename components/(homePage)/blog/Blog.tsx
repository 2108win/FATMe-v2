import HeadingText from "@/components/HeadingText";
import React from "react";

import ReferencesBlog from "@/components/ReferencesBlog";

const getData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Write something wrong");
  }
  return res.json();
};

const Blog = async () => {
  const cardData = await getData();

  return (
    <div className="container flex flex-col gap-10">
      <HeadingText
        className="items-center text-center"
        smallTitle="Tin tức"
        bigTitle="Các Blog mới nhất từ FatMe"
        description="Tin tức mới nhất về FatMe"
      />
      <ReferencesBlog data={cardData?.data} />
    </div>
  );
};

export default Blog;
