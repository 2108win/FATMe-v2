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
      className={`card border border-neutral-content/10 hover:border-neutral-content/50 w-fit bg-base-100 shadow hover:shadow-lg  transition-all duration-500 group overflow-hidden cursor-pointer ${
        className ? className : ""
      }`}
    >
      <figure className="aspect-[4/3] shadow-md rounded-box overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={750}
          loading="lazy"
          className="object-cover"
        />
      </figure>
      <div className="card-body p-5 basis-64 min-h-[300px]">
        <div className="badge badge-lg badge-accent bg-opacity-10 p-3 text-accent rounded-btn">
          {badge}
        </div>
        <h2 className="card-title w-full group-hover:text-primary text-ellipsis items-start truncate-2 transition-all">
          {title}
        </h2>
        <p className="truncate-2">{description}</p>
        <div className="card-actions">
          {/* list category */}
          {categories &&
            categories.map((category, index) => (
              <span key={index} className="badge badge-outline">
                {category}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
