"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type CardProps = {
  blogId: number;
  className?: string;
  image: string;
  title: string;
  description: string;
  badge?: string;
  categories?: string[];
};

const CardBlog: React.FC<CardProps> = ({
  blogId,
  image,
  title,
  description,
  badge,
  categories,
  className,
  ...props
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/blog/" + blogId)}
      className={`group card w-fit cursor-pointer overflow-hidden border border-neutral-content/10 bg-base-100  shadow transition-all duration-500 hover:border-neutral-content/50 hover:shadow-lg ${
        className ? className : ""
      }`}
    >
      <figure className="rounded-box aspect-[4/3] overflow-hidden shadow-md">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={750}
          loading="lazy"
          className="object-cover"
        />
      </figure>
      <div className="card-body min-h-[300px] basis-64 p-5">
        <div className="badge badge-warning badge-outline rounded-btn badge-lg bg-opacity-10 p-3">
          {badge}
        </div>
        <h2 className="truncate-2 card-title w-full items-start text-ellipsis transition-all group-hover:text-primary">
          {title}
        </h2>
        <p className="truncate-2">{description}</p>
        <div className="card-actions">
          {/* list category */}
          {categories &&
            categories.map((category, index) => (
              <span key={index} className="badge badge-warning badge-outline">
                {category}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
