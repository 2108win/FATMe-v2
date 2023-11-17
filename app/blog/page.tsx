import { Metadata } from 'next'
import CardBanner from "@/components/(blog)/CardBanner";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'WinLax - Blog'
  }
}

const Blog = () => {

  return (
    <div className="space-y-16">
      <CardBanner />
    </div>
  );
};

export default Blog;
