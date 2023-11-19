import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  name: string;
  description: string;
  image: string;
  linkContact?: string;
};

const Card: React.FC<CardProps> = ({ name, description, image, linkContact }) => {
  return (
    <div className="card bg-base-100 rounded-box border border-neutral-content/10 hover:border-neutral-content/50 w-full flex flex-col gap-6 items-center justify-center px-6 py-8 shadow-md hover:shadow-2xl transition-all duration-300 text-center">
      <Image src={image} alt={name} width={120} height={120} className="mask mask-squircle object-cover aspect-square" />
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-md">{description}</p>
      <Link href={linkContact ? linkContact : ""}>
        <button className="btn btn-outline rounded-btn">
          <Image src="/icons/messenger.svg" alt="messenger" width={20} height={20} />
          <span className="normal-case">Liên hệ</span>
        </button>
      </Link>
    </div>
  );
};

export default Card;
