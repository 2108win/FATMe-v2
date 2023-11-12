import Image from "next/image";
import React from "react";

type CardProps = {
  avatar: string;
  name: string;
  description: string;
  star: number;
  content?: string;
};

const Card: React.FC<CardProps> = ({ avatar, name, description, star, content }) => {
  return (
    <div className="card bg-base-100 rounded-box border border-neutral-content w-full flex flex-col gap-4 p-4 shadow-md hover:shadow-2xl transition-all duration-300 even:row-span-2">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <Image src={avatar} alt={name} width={50} height={50} className="object-cover rounded-full aspect-square" />
          <h5 className="text-base font-medium">{name}</h5>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/icons/star.svg" alt="star" width={20} height={20} />
          <span className="text-sm font-medium">{star}</span>
        </div>
      </div>
      {content && <p className="">{content}</p>}
    </div>
  );
};

export default Card;
