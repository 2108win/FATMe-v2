import HeadingText from "@/components/HeadingText";
import Image from "next/image";
import React from "react";
import Card from "./Card";

const cardData = [
  {
    avatar: "/images/img-creator-win.jpg",
    name: "Lã Mai Win",
    description: "CEO - WinLax",
    star: 4.5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    avatar: "/images/img-creator-win.jpg",
    name: "Lã Mai Win",
    description: "CEO - WinLax",
    star: 4.7,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Win_Lax",
  },
  {
    avatar: "/images/img-creator-win.jpg",
    name: "Lã Mai Win",
    description: "CEO - WinLax",
    star: 4.5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const Reviews = () => {
  return (
    <div className="container flex gap-10 flex-col md:flex-row-reverse items-center">
      <div className="flex flex-col relative basis-1 md:basis-1/2">
        <HeadingText
          smallTitle="Đã làm những gì"
          bigTitle="Phản hồi tích cực"
          description="Bạn có thể xem thêm các phản hồi khác tại đây"
        />
        <div className="flex items-center gap-1 mt-6">
          <Image src="/icons/tick.svg" alt="tick" width={20} height={20} />
          <span className="font-bold text-xl text-primary">450+</span>
          <span className="text-md">Phản hồi từ khách hàng</span>
        </div>
        <button className="btn btn-outline rounded-btn md:w-fit hover:border-primary hover:text-primary mt-10">
          <span className="loading loading-dots loading-sm"></span>
          See more
        </button>
      </div>
      <div className="basis-1 md:basis-1/2 relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-box before:bg-base-200 before:shadow-xl before:scale-75 before:border before:border-neutral-content before:-skew-y-12">
        <div className="grid grid-cols-2 gap-5 items-center">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
