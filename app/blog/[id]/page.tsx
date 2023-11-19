import HeadingText from "@/components/HeadingText";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

type Props = {
  params: { id: number };
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  // const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return {
    title: "Blog - " + id,
  };
}

const BlogSlug = ({ params }: Props) => {
  return (
    <div className="container space-y-16">
      <div className="text-base breadcrumbs">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>BlogId - {params.id}</li>
        </ul>
      </div>
      <div className="!mt-6 flex flex-col gap-4">
        <HeadingText
          className="items-center text-center flex-col-reverse"
          bigTitle="Khám phá khu phố Tàu giữa lòng Sài Gòn"
          description="22 tháng 12 năm 2021"
        />
        {/* 4 badge loop */}
        <div className="flex gap-2 justify-center flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div key={index} className="badge badge-lg badge-accent bg-opacity-10 p-3 text-accent rounded-btn">
              category {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSlug;
