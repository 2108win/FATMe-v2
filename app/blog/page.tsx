import { Metadata } from "next";
import CardBanner from "@/components/(blog)/CardBanner";
import React from "react";
import ReferencesBlog from "@/components/ReferencesBlog";
import HeadingText from "@/components/HeadingText";
import CardBlog from "@/components/CardBlog";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WinLax - Blog",
  };
}

const getData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
    cache: "no-store",
  });

  return res.json();
};

const Blog = async () => {
  const cardData = await getData();
  return (
    <div className="space-y-10">
      {cardData && <CardBanner data={cardData?.data} />}
      {/* list blog */}
      <div className="container grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 md:grid-cols-3">
        {cardData?.data.map((card: any) => (
          <CardBlog
            key={card.id}
            slug={card.slug}
            blogId={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            category={card.categorySlug}
            className="!grid !grid-rows-subgrid"
          />
        ))}
      </div>
      <div className="container flex flex-col gap-10">
        <HeadingText
          className="items-center text-center"
          bigTitle="Có thể bạn thích"
        />
        <ReferencesBlog data={cardData?.data} />
      </div>
    </div>
  );
};

export default Blog;
