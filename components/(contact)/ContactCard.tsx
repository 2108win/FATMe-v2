import Image from "next/image";
import Link from "next/link";
import React from "react";

type ContactCardProps = {
  className?: string;
  icon: string;
  title: string;
  description: string;
  type?: "email" | "phone" | string;
};

const ContactCard: React.FC<ContactCardProps> = ({
  className,
  icon,
  title,
  description,
  type,
}) => {
  return (
    <div
      className={`group card rounded-box cursor-pointer border border-neutral-content/10 bg-base-100 shadow-md transition-all duration-300 hover:border-neutral-content/50 hover:bg-base-200 hover:shadow-lg ${
        className ? className : ""
      }`}
    >
      <div className="card-body items-center gap-5 text-center">
        <Image src={icon} alt={title} width={50} height={50} loading="lazy" />
        {/* <h2 className="card-title group-hover:text-primary transition-colors duration-300">{title}</h2> */}
        {type === "email" ? (
          <Link
            href={`mailto:${description}`}
            className="transition-colors duration-300 group-hover:text-primary"
          >
            {description}
          </Link>
        ) : type === "phone" ? (
          <Link
            href={`tel:${description}`}
            className="transition-colors duration-300 group-hover:text-primary"
          >
            {description}
          </Link>
        ) : (
          <p className="transition-colors duration-300 group-hover:text-primary">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
