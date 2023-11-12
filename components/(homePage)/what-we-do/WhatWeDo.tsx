import React from "react";
import HeadingText from "../../HeadingText";
import Card from "./Card";

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
          <Card
            title="Thực phẩm đa dạng"
            description="Chúng tôi đảm bảo thức ăn luôn được tươi mới, thơm ngon."
            image="/images/img-foods.png"
          />
          <Card
            title="Thực phẩm đa dạng"
            description="Chúng tôi đảm bảo thức ăn luôn được tươi mới, thơm ngon."
            image="/images/img-foods.png"
          />
          <Card
            title="Thực phẩm đa dạng"
            description="Chúng tôi đảm bảo thức ăn luôn được tươi mới, thơm ngon."
            image="/images/img-foods.png"
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
