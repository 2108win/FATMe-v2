import ReferencesBlog from "@/components/ReferencesBlog";
import HeadingText from "@/components/HeadingText";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Comments from "@/components/(blog)/Comments";
import FormComment from "@/components/(blog)/FormComment";

type Props = {
  params: { id: number };
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  // const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return {
    title: "Blog - " + id,
  };
}

const BreadcrumbsLinks = [
  { href: "/", label: "Home", icon: "/images/logo.png" },
  { href: "/blog", label: "Blog" },
];

const BlogSlug = ({ params }: Props) => {
  return (
    <div className="space-y-16">
      <div className="container">
        <Breadcrumbs
          links={BreadcrumbsLinks}
          lastLink={`BlogId - ${params.id}`}
        />
        <div className="!mt-6 flex flex-col gap-6">
          <HeadingText
            className="flex-col-reverse items-center text-center"
            bigTitle="Khám phá khu phố Tàu giữa lòng Sài Gòn"
            description="22 tháng 12 năm 2021"
          />
          {/* badge categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="badge badge-warning badge-outline rounded-btn badge-lg p-3 hover:badge-secondary"
              >
                category {item}
              </div>
            ))}
          </div>
          {/* image banner*/}
          <div className="rounded-box aspect-[2/1] overflow-hidden border border-neutral-content/10 shadow-md transition-all duration-500 hover:border-neutral-content/50 hover:shadow-lg">
            <Image
              src="/images/poster-video.png"
              alt="blog"
              width={2000}
              height={1000}
              className="object-cover"
            />
          </div>
          {/* content */}
          <div className="mx-auto mb-10 max-w-4xl space-y-2">
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              alias debitis! Facere in architecto atque sit possimus eaque,
              maiores laudantium, laborum repellendus iusto, esse accusantium
              minima? Qui ipsam id libero. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ratione, alias debitis! Facere in
              architecto atque sit possimus eaque, maiores laudantium, laborum
              repellendus iusto, esse accusantium minima? Qui ipsam id libero.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              alias debitis! Facere in architecto atque sit possimus eaque,
              maiores laudantium, laborum repellendus iusto, esse accusantium
              minima? Qui ipsam id libero.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              dolorem ipsam! Pariatur dolorem fugiat voluptatum dignissimos
              architecto quis voluptate ea odit repellendus quisquam, neque,
              magni asperiores laudantium nemo minus expedita.
            </p>
          </div>
        </div>
        {/* Comment */}
        <Comments />
      </div>
      {/* list blog references*/}
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

export default BlogSlug;
