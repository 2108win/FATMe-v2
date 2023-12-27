import ReferencesBlog from "@/components/ReferencesBlog";
import HeadingText from "@/components/HeadingText";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Comments from "@/components/(blog)/Comments";
import FormComment from "@/components/(blog)/FormComment";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;

  const data = await getData(slug);
  return {
    title: "Blog - " + data?.title,
  };
}

const BreadcrumbsLinks = [
  { href: "/", label: "Home", icon: "/images/logo.png" },
  { href: "/blog", label: "Blog" },
];

const getData = async (slug: string) => {
  const data = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!data.ok) {
    throw new Error("Cannot fetch data posts/slug");
  }
  return data.json();
};

const BlogSlug = async ({ params }: Props) => {
  const slug = params.slug;
  const blogData = await getData(slug);
  return (
    blogData && (
      <div className="space-y-16">
        <div className="container">
          <Breadcrumbs
            links={BreadcrumbsLinks}
            lastLink={`BlogId - ${blogData.title}`}
          />
          <p className="mt-6 text-center">Lượt truy cập: {blogData.views}</p>
          <div className="!mt-4 flex flex-col gap-6">
            <HeadingText
              className="flex-col-reverse items-center text-center"
              bigTitle={blogData.title}
              description={blogData.createdAt}
            />
            {/* badge categories */}
            <div className="flex flex-wrap justify-center gap-2">
              <div className="badge badge-warning badge-lg rounded-btn p-3  hover:badge-outline">
                {blogData.categorySlug}
              </div>
            </div>
            {/* image banner*/}
            <div className="aspect-[2/1] overflow-hidden rounded-box border border-neutral-content/10 shadow-md transition-all duration-500 hover:border-neutral-content/50 hover:shadow-lg">
              {blogData.image ? (
                <Image
                  src={blogData.image}
                  alt="blog"
                  width={2000}
                  height={1000}
                  className="h-auto w-auto object-cover"
                />
              ) : (
                <div className="skeleton h-full w-full"></div>
              )}
            </div>
            {/* content */}
            <div className="mx-auto mb-10 max-w-4xl space-y-2">
              <div className="space-y-1">{blogData.description}</div>{" "}
              <div className="space-y-1">{blogData.content}</div>
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
    )
  );
};

export default BlogSlug;
