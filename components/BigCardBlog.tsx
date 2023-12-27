import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type BigCardBlogProps = {
  key?: string;
  blogId: number;
  slug: string;
  className?: string;
  image?: string;
  title: string;
  description: string;
  badge?: string;
  category?: string;
  linkReference?: string;
};

const BigCardBlog: React.FC<BigCardBlogProps> = ({
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
      onClick={() => router.replace("/blog/" + slug)}
      className="group grid h-full w-fit cursor-pointer grid-cols-1 overflow-hidden rounded-box border border-neutral-content/10 bg-base-100 shadow transition-all duration-500 hover:border-neutral-content/50 hover:shadow-lg sm:grid-cols-2 "
    >
      <figure className="h-full overflow-hidden rounded-box shadow-md">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            loading="lazy"
            className="aspect-[4/3] h-full object-cover"
          />
        ) : (
          <div className="skeleton h-full w-full"></div>
        )}
      </figure>
      <div className="card-body h-full min-h-[300px] basis-80 p-5 md:basis-4/5">
        <div className="badge badge-warning badge-outline badge-lg rounded-btn p-3">
          {badge}
        </div>
        <h2 className="card-title line-clamp-3 w-full items-start text-ellipsis text-pretty pb-1 text-xl font-bold transition-all group-hover:text-primary md:text-3xl">
          {title}
        </h2>
        <div className="line-clamp-3">{description}</div>
        {image && (
          <Link
            href={image}
            className="mt-auto line-clamp-1 hover:text-primary hover:underline md:mt-6"
          >
            {image}
          </Link>
        )}
        <div className="card-actions">
          {/* list category */}
          <span className="badge badge-warning badge-outline">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default BigCardBlog;
