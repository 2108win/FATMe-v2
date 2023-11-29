import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="card rounded-box flex w-full flex-col items-center justify-center gap-6 border border-neutral-content/10 bg-base-200 p-10 text-center shadow-md transition-all duration-300 hover:border-neutral-content/50 hover:bg-base-300 hover:shadow-2xl">
      <div className="aspect-square">
        <Image
          className="h-24 w-24"
          src={image}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-md">{description}</p>
    </div>
  );
};

export default Card;
