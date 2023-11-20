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

const ContactCard: React.FC<ContactCardProps> = ({ className, icon, title, description, type }) => {
  return (
    <div
      className={`card bg-base-100 hover:bg-base-200 shadow-md rounded-box border border-neutral-content/10 hover:border-neutral-content/50 hover:shadow-lg transition-all duration-300 group cursor-pointer ${
        className ? className : ""
      }`}
    >
      <div className="card-body items-center text-center gap-5">
        <Image src={icon} alt={title} width={50} height={50} loading="lazy" />
        {/* <h2 className="card-title group-hover:text-primary transition-colors duration-300">{title}</h2> */}
        {type === "email" ? (
          <Link
            href={`mailto:${description}`}
            className="group-hover:text-primary transition-colors duration-300"
          >
            {description}
          </Link>
        ) : type === "phone" ? (
          <Link
            href={`tel:${description}`}
            className="group-hover:text-primary transition-colors duration-300"
          >
            {description}
          </Link>
        ) : (
          <p className="group-hover:text-primary transition-colors duration-300">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
