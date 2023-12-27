"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type BreadcrumbsProps = {
  className?: string;
  links: {
    href: string;
    icon?: string;
    label: string;
  }[];
  lastLink?: string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  className,
  links,
  lastLink,
}) => {
  const router = useRouter();
  return (
    <div className={`breadcrumbs text-base ${className ? className : ""}`}>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-primary hover:underline"
          >
            <div
              className="flex items-center gap-x-2"
              onClick={() => {
                router.replace(link.href);
              }}
            >
              {link.icon && (
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={16}
                  height={16}
                />
              )}
              {link.label}
            </div>
          </li>
        ))}
        <li className="flex-1 truncate">{lastLink}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
