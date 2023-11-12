"use client";
import HeadingText from "@/components/HeadingText";
import Image from "next/image";
import React from "react";

const WhoWantWhat = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <Image src="/images/img-who.png" alt="who-want-what" width={600} height={600} />
      <div className="flex flex-col gap-10">
        <HeadingText
          smallTitle="AI MUỐN GÌ?"
          bigTitle="Vươn tầm sánh bước cùng các bạn mọi nơi"
          description="Bất cứ nơi đâu, với 1 cuộc điện thoại chúng tôi sẽ phục vụ cho bạn những món ngon trọn hương vị"
        />
        <button className="btn btn-outline rounded-btn md:w-fit hover:border-primary hover:text-primary">
          <span className="loading loading-ring loading-sm"></span>
          See more
        </button>
      </div>
    </div>
  );
};

export default WhoWantWhat;
