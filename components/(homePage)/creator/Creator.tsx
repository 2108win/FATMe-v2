import HeadingText from "@/components/HeadingText";
import React from "react";
import Card from "./Card";

const creatorData = [
  {
    name: "Lã Mai Win",
    description: "19522550",
    image: "/images/img-creator-win.jpg",
    linkContact: "https://www.facebook.com/2108win/",
  },
  {
    name: "Lã Mai Win",
    description: "Gia Lai",
    image: "/images/img-creator-win.jpg",
    linkContact: "https://www.facebook.com/2108win/",
  },
  {
    name: "Lã Mai Win",
    description: "Đức Cơ",
    image: "/images/img-creator-win.jpg",
    linkContact: "https://www.facebook.com/2108win/",
  },
  {
    name: "Lã Mai Win",
    description: "Tp.Hồ Chí Minh",
    image: "/images/img-creator-win.jpg",
    linkContact: "https://www.facebook.com/2108win/",
  },
];

const Creator = () => {
  return <div className="w-full bg-base-200">
    <div className="container flex flex-col gap-10">
        <HeadingText className="items-center text-center" smallTitle="Chúng tôi có gì" bigTitle="Các nhà sáng lập của chúng tôi" description="Thông tin của những thành viên đã hợp tác tạo ra FatMe nếu có câu hỏi gì bạn có thể liên hệ trực tiếp cho họ nhé !!!" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {creatorData.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  </div>;
};

export default Creator;
