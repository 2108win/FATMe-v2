import { Metadata, ResolvingMetadata } from "next";
import { useParams } from "next/navigation";
import React from "react";

type Props = {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  // const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return {
    title: 'Blog - ' + id,
  };
}

const BlogSlug = ({ params, searchParams }: Props) => {
  return <div className="container">BlogId - {params.id}</div>;
};

export default BlogSlug;
