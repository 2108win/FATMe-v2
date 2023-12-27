"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type CardBlogProps = {
  key?: string;
  blogId: number;
  slug: string;
  className?: string;
  image?: string;
  title: string;
  description: string;
  badge?: string;
  category?: string;
};

const CardBlog: React.FC<CardBlogProps> = ({
  key,
  blogId,
  slug,
  image,
  title,
  description,
  badge,
  category,
  className,
  ...props
}) => {
  const router = useRouter();
  return (
    <div
      key={key}
      onClick={() => router.push("/blog/" + slug)}
      className={`group card h-full cursor-pointer overflow-hidden border border-neutral-content/10 bg-base-100 shadow transition-all duration-500 hover:border-neutral-content/50 hover:shadow-lg ${
        category && badge ? "row-span-5" : "row-span-4"
      } ${className ? className : ""}`}
    >
      <figure className="overflow-hidden rounded-box shadow-md">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            loading="lazy"
            className="aspect-[4/3] h-full object-cover object-center"
          />
        ) : (
          <div className="skeleton h-full w-full"></div>
        )}
      </figure>
      <div
        className={`card-body ${
          badge && category ? "row-span-4" : "row-span-3"
        } grid grid-rows-subgrid p-5`}
      >
        {badge && (
          <div className="badge badge-warning badge-outline badge-lg rounded-btn bg-opacity-10 p-3">
            {badge}
          </div>
        )}
        <h2 className="card-title line-clamp-2 h-14 w-full items-start text-ellipsis transition-all group-hover:text-primary">
          {title}
        </h2>
        <div className="line-clamp-2 h-max min-h-12">{description}</div>
        {category && (
          <div className="card-actions mt-auto">
            {/* list category */}
            <span className="badge badge-warning badge-outline">
              {category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardBlog;
