import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="card rounded-box border border-neutral-content/10 hover:border-neutral-content/50 w-full flex flex-col gap-6 items-center justify-center p-10 bg-base-200 hover:bg-base-300 shadow-md hover:shadow-2xl transition-all duration-300 text-center">
      <Image src={image} alt={title} width={100} height={100} />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-md">{description}</p>
    </div>
  );
};

export default Card;
