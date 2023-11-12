"use client";
import { useParams } from "next/navigation";
import React from "react";

const Blog = () => {
  const param = useParams();

  return <div className="space-y-16 container">This is blog page!</div>;
};

export default Blog;
