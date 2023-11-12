import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  link: string;
  slug: string;
  className?: string;
  image: string;
  title: string;
  description: string;
  badge?: string;
  categories?: string[];
};

const CardBlog: React.FC<CardProps> = ({ link = "blog/", slug, image, title, description, badge, categories, className, ...props }) => {
  return (
      <Link scroll={true} id={slug} href={link + slug} className={`card border border-neutral-content w-fit bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 group ${className ? className : ""}`}>
        <figure className="aspect-[4/3]">
          <Image src={image} alt={title} width={1000} height={1000} loading="lazy" className="object-cover rounded-box"/>
        </figure>
        <div className="card-body p-5 basis-64">
            <div className="badge badge-info bg-opacity-80 text-info-content p-3 rounded-btn">{badge}</div>
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
      </Link>
  );
};

export default CardBlog;
