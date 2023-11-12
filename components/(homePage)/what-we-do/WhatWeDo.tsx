import React from "react";
import HeadingText from "../../HeadingText";
import Card from "./Card";

const cardData = [
  {
    title: "Thực phẩm đa dạng",
    description: "Chúng tôi đảm bảo thức ăn luôn được tươi mới, thơm ngon.",
    image: "/images/img-foods.png",
  },
  {
    title: "Miễn phí vận chuyển",
    description: "Miễn phí vận chuyển 1 đơn hàng đầu tiên trong ngày.",
    image: "/images/img-delivery.png",
  },
  {
    title: "Hơn 100 nghìn nhà hàng",
    description: "Nhiều sự lựa chọn, cho các bạn đặt đồ ăn thoải mái nhé.",
    image: "/images/img-restaurant.png",
  },
];

const WhatWeDo = () => {
  return (
    <>
      <div className="container flex flex-col gap-10">
        <HeadingText
          className="text-center items-center"
          smallTitle="Chúng tôi làm gì"
          bigTitle="Liên kết các cửa hàng với bạn nhanh chóng"
          description="Hướng đến việc tiện lợi khi ở nhà mà cũng có đồ ăn mọi lúc mọi nơi, chúng tôi sẽ là người giúp các bạn thực hiện việc đó dễ dàng hơn."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cardData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
