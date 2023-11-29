import { Metadata } from "next";
import CardBanner from "@/components/(blog)/CardBanner";
import React from "react";
import ReferencesBlog from "@/components/ReferencesBlog";
import HeadingText from "@/components/HeadingText";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WinLax - Blog",
  };
}

const Blog = () => {
  return (
    <div className="space-y-16">
      <CardBanner />
      <div className="container flex flex-col gap-10">
        <HeadingText
          className="items-center text-center"
          bigTitle="Có thể bạn thích"
        />
        <ReferencesBlog />
      </div>
    </div>
  );
};

export default Blog;
